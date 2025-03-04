import { createContext, useEffect , useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeduration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ( props ) => {

  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [allCourses, setAllCourses] = useState([]);

  const [isEducator , setIsEducator] = useState(true);
  
  const [isAlreadyEnrolled , setIsAlreadyEnrolled] = useState(false)
  const [enrolledCourses , setEnrolledCourses] = useState([])




  // fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }
  // function to calculate course rating
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
  }
  
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    });
    return totalRating / course.courseRatings.length;
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
       setEnrolledCourses(dummyCourses)
  } 
  useEffect(() => {
    fetchAllCourses()
    FechuUserEnrolledCourses()
  }, [])
  const value = {
    // Your context values
    isAlreadyEnrolled,
    enrolledCourses,
    currency, 
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    CalculateChapterTime,
    CalculateCourseDuration,
    CalculateNoOfLectures
  

  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}
