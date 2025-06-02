import User from "../model/User.js";
import Course from "../model/course.js";
import { CourseProgess } from "../model/courseProgress.js";
import Purches from "../model/purches.js";
import Stripe from 'stripe'

export const getUserData = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


// User enrolled Courses with lecture Links
export const userEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth.userId;
        const userData = await User.findById(userId).populate("enrolledCourses");

        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        return res.json({ success: true, enrolledCourses: userData.enrolledCourses });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const purchesCourse = async (req, res) => {
 try {
    const { courseId } = req.body;
    const { origin } = req.headers;
    const userId = req.auth.userId;

    const userData = await User.findById(userId);
    const courseData = await Course.findById(courseId);

    if (!userData || !courseData) {
      return res.json({ success: false, message: "Data not found" });
    }
    const purchaseData = {
      courseId : courseData._Id,
      userId,
      amount : (courseData.coursePrice - (courseData.discount * courseData.coursePrice / 100).toFixed(2))
    }

    const newPurchase = await Purches.create(purchaseData)
const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);

   const currency =process.env.CURRENCY.toLowerCase()
    const line_items = [{
      price_data: {
        currency,
        product_data: {
          name: courseData.courseTitle,
        },
        unit_amount: Math.round(newPurchase.amount)*100, // Stripe uses cents
      },
      quantity: 1,
    }];
    
    // const alreadyPurchased = await Purches.findOne({ courseId, userId });
    // if (alreadyPurchased) {
    //   return res.json({ success: false, message: "Course already purchased" });
    // }
    const session = await stripeInstance.checkout.sessions.create({
      success_url: `${origin}/loading/my-enrollment`,
      cancel_url: `${origin}/`,
      line_items:line_items,
      mode: 'payment',
      metadata: {
        purchaseId : newPurchase._id.toString(),
        courseId,
      },
    });

    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.error("Stripe Error:", error);
    res.json({ success: false, message: "Internal Server Error" });
  }
};

//   Update user Course Progress

export const updateUserCourseProgress  = async (req , res)=>{
  try {
    const userId = req.auth.userId;
    const {courseId , lectureId} = req.body;
    const progressData = await CourseProgess.find({userId , courseId})

    if(progressData){
        if(progressData.lectureCompleted.includes(lectureId)){
            return res.json({success : true , message : "Lecture Already Completed"})
        }
        progressData.lectureCompleted.push(lectureId)
        await progressData.save()
    }
    else{
        await CourseProgess.create({
            userId,
            courseId,
            lectureCompleted :[lectureId]
        })
    }
    res.json({success : true , message :"Progress Updated"})
  } catch (error) {
    res.json({success : false , message :error.message})
    
  }
}
// get user course progress
export const getUserCourseProgress = async (req , res)=>{
    try {
        const userId = req.auth.userId;
        const {courseId } = req.body;
        const progressData = await CourseProgess.findOne({userId , courseId})

        res.json({success : true ,progressData})
    
    } catch (error) {
        res.json({success : false , message:error.message})
    }
}

// Add User rating to course
export const AddUserRating = async (req , res)=>{
    const userId = req.auth.userId;
    const {courseId , rating } = req.body;

    if(!courseId || !userId || !rating || rating < 1 || rating >5){
        return res.json({success :false , message :"invalid Details"})
    }
    try {
        const course = await Course.findById(courseId)
        if(!course){
            return res.json({success : false , message : "Course not found"});
        }
        const user = await User.findById(userId);
        if(!user || !user.enrolledCourses.includes(courseId)){
            return res.json({success : false , message : "User is not purches this course."});
          
        }
        const existingRatingIndex= course.courseRatings.findIndex(r =>r.userId ===userId)
        if(existingRatingIndex > -1){
            course.courseRatings[existingRatingIndex].rating = rating;

        }
        else{
            course.courseRatings.push({userId , rating});
        }
        await course.save();
        return res.json({success : true , message :"Ratting Added"})
    } catch (error) {
        return res.json({success : false , message : error.message})

        
    }
}