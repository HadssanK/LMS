import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../Components/student/Loading'

const MyCourses = () => {
  const {currency , allCourses} = useContext(AppContext)
  const [courses, setCourses] = useState(null)

  const fetchEducatorCourses = async () => {
    setCourses(allCourses)
  }
  useEffect(() => {
    fetchEducatorCourses()
  }, [])
  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
    <div className='w-full'>
      <h2 className='pb-4 text-lg font-medium'>My Courses</h2>
      <div className='flex items-center flex-col max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20 shadow-md'>
        <table className='md:table-auto table-fixed w-full overflow-hidden'>
         <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
         <tr>
            <td className='px-4 py-3 font-semibold truncate'>All Courses</td>
            <td className='px-4 py-3 font-semibold truncate'>Earnings</td>
            <td className='px-4 py-3 font-semibold truncate'>Student</td>
            <td className='px-4 py-3 font-semibold truncate'>Published On</td>
          </tr>
         </thead>
         <tbody className='text-sm text-gray-500'>
          {courses.map((course, index) => (
              <tr key={course._id} className='border-b border-gray-500/20'>
                <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate'>
                {<img src={course.courseThumbnail} alt='course-img' className='w-16'/>}
                <span className='truncate hidden md:block'>{course.courseTitle}</span>
                </td>
                <td className='px-4 py-3 '>{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}</td>
                <td className='px-4 py-3 '>{course.enrolledStudents.length}</td>
                <td className='px-4 py-3 '> {course.createdAt ? new Date(Date.parse(course.createdAt)).toLocaleDateString() : "N/A"}</td>
              </tr>
            ))}

         </tbody>
        </table>
      </div>
    </div>
    </div>
  ) : <Loading/>
}

export default MyCourses