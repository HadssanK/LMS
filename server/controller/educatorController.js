import {clerkClient} from '@clerk/express';
// import { urlencoded } from 'express';
import Course from '../modle/course.js';
import {v2 as cloudinary} from 'cloudinary';
import mongoose from 'mongoose';
import Purches from '../modle/purches.js';
import User from '../modle/User.js';

export const updateRoleEducator = async (req , res)=>{
    try{
        const userId = req.auth.userId;
       await clerkClient.users.updateUserMetadata(userId , {
            publicMetadata : {
                role : "Educator"
            }
        })
        res.json({success : true, message : "You can publish courses now"})



    }catch(error){
       res.json({message : error.message , success : false}) 
    }
}

export const addCourses = async (req, res) => {
    try {
        const { courseData } = req.body;
        const imagefile = req.file;
        const educatorId = req.auth?.userId;

        console.log("Educator ID:", educatorId);

        if (!imagefile) {
            return res.json({ message: "Please upload a thumbnail", success: false });
        }

        if (!educatorId || typeof educatorId !== "string") {
            return res.status(400).json({ message: "Invalid Educator ID", success: false });
        }
        

        let parsedCourseData;
        try {
            parsedCourseData = JSON.parse(courseData);
        } catch (error) {
            return res.json({ message: "Invalid JSON format", success: false });
        }

        // Upload image first
        const imageUpload = await cloudinary.uploader.upload(imagefile.path);
        if (!imageUpload.secure_url) {
            return res.json({ message: "Image upload failed", success: false });
        }

        parsedCourseData.courseThumbnail = imageUpload.secure_url;
        parsedCourseData.educator = educatorId;

        // Create course
        const newCourse = await Course.create(parsedCourseData);

        res.json({ success: true, message: "Course added successfully", data: newCourse });

    } catch (error) {
        res.json({ message: error.message, success: false });
    }
};


// Get courses through educator ID

export const getEducatorCourses = async (req, res) => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        res.json({ success: true, data: courses });
        
    } catch (error) {
        res.json({ message: error.message, success: false });
        
    }
}

// get educator dashboard data {Total Earninngs , Total Courses , Total Students}

export const EducatorDashboardData = async (req , res)=>{
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const totalCourses = courses.length;

        const CourseIds = courses.map(course => course._id);
        // calculate total earnings
        const Purches = await Purches.find({ courseId: { $in: CourseIds }, status: "Completed" });
        const totalEarnings = Purches.reduce((sum, perches) => sum + perches.amount, 0);

        // Collect unique Enrolled students Ids with thier course title
        const enrolledStudents = [];
        for (const course of courses) {
            const students = await User.find({
                _id: { $in: course.enrolledStudents },

            },'name imageUrl');
            students.forEach(student => {
                enrolledStudents.push({ courseTitle: course.courseTitle , student });
            });
        }
        res.json({success : true , dashboardData :{
            totalEarnings , totalCourses , enrolledStudents
        }})
    } catch (error) {
        
    }
}

// Get enrolled students Data with purches Data

export const getEnrolledStudentsData = async (req , res)=>{
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const CourseIds = courses.map(course => course._id);
        const Purceses = await Purches.find({ courseId: { $in: CourseIds }, status: "Completed" }).populate("userId" , "name imageUrl").populate("courseId" , "courseTitle");
        const enrolledStudents = Purceses.map(purches => {
            return {
                student : purches.userId,
                courseTitle : purches.courseId.courseTitle,
                amount : purches.createdAt
            }
        })
       
        res.json({success : true , enrolledStudents})
    } catch (error) {
        res.json({message : error.message , success : false})
    }
}
