import { createContext, useEffect , useState } from "react";
import { dummyCourses } from "../assets/assets";
import {  useNavigate } from "react-router-dom";
import humanizeduration from "humanize-duration";
import {useAuth , useUser} from "@clerk/clerk-react"
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ( props ) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  
  const {getToken} = useAuth()
  const {user} = useUser()
  const [allCourses, setAllCourses] = useState([]);
  
  const [isEducator , setIsEducator] = useState(false);
  
  const [isAlreadyEnrolled , setIsAlreadyEnrolled] = useState(false)
  const [enrolledCourses , setEnrolledCourses] = useState([])
  const [userData, setUserData] = useState(null)


  // fetch all courses
  const fetchAllCourses = async () => {
    try {
     const {data} = await axios.get('http://localhost:5000/api/course/all')
     if(data.success){
      setAllCourses(data.courses)
      // console.log(data);
     }
     else{
      toast.error(data.message)
     }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const fetchUserData = async () => {
  if (user?.publicMetadata?.role === 'educator') {
    setIsEducator(true);
  }

  try {
    const token = await getToken();
    if (!token) {
      toast.error('User not authenticated');
      return;
    }

    const { data } = await axios.get('http://localhost:5000/api/user/data', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.success) {
      setUserData(data.user);
      console.log(data); // Optional+
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

  // function to calculate course rating
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
  }
  
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    });
    return Math.floor(totalRating / course.courseRatings.length)
  }
  // function to calculate chapter time
  const CalculateChapterTime =(chapter)=>{
      let time= 0
      chapter.chapterContent.map((lecture)=> time+= lecture.lectureDuration)
      return humanizeduration(time * 60 * 1000, { units: ["h" , "m"] })
  }

  // function to calculate total course time

  const CalculateCourseDuration = (course)=>{
    let time = 0
    course.courseContent.map((chapter)=> chapter.chapterContent.map((lecture)=> time+= lecture.lectureDuration))
    return humanizeduration(time*60*1000, { units: ["h" , "m"] })
  }

  // function to calculate to No of lectures in the course 
  const CalculateNoOfLectures = (course)=>{
    let totalLecture = 0
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
        totalLecture+= chapter.chapterContent.length
      }
    })
    return totalLecture
  }
  // fetch user enrolled courses

  const FechuUserEnrolledCourses = async()=>{
     try {
       const token = await getToken();
      const {data} = await axios.get('http://localhost:5000/api/user/enrolled-courses' , {headers : {Authorization: `Bearer ${token}`}})
      if (data.success) {
        setEnrolledCourses(data.enrolledCourses.reverse())
      }
      else{
        toast.error(data.message)
      }
     } catch (error) {
        toast.error(error.message)
      
     }
  } 
  useEffect(() => {
    fetchAllCourses()
  }, [])
  
  
  useEffect(() => {
      const logToken = async () => {
    const token = await getToken();
    console.log("User Token:", token); // 🔐 Token will be shown in console
  };
    if(user){
      fetchUserData()
      FechuUserEnrolledCourses()
      logToken()

   }
  }, [user])
  const value = {
    // Your context values
    currency, 
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    CalculateNoOfLectures,
    CalculateCourseDuration,
    CalculateChapterTime,
    enrolledCourses,
    FechuUserEnrolledCourses,
    backendUrl,
    userData,
    setUserData,
    getToken,
    fetchAllCourses,
    isAlreadyEnrolled,
    setIsAlreadyEnrolled,
  

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}
