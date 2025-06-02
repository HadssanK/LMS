import { useState } from 'react'

import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CoursesList'
import CourseDetail from './pages/student/CourseDetails'
import MyEnrollment from './pages/student/MyEnrollement'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './Components/student/Navbar'
import "quill/dist/quill.snow.css"
 import { ToastContainer } from 'react-toastify';
function App() {
  // const [count, setCount] = useState(0)
 const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white'> 
    <ToastContainer/>
   {!isEducatorRoute && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/course-List' element={<CourseList/>} />
      <Route path='/course-List/:input' element={<CourseList/>} />
      <Route path='/course/:id' element={<CourseDetail/>} />
      <Route path='/my-enrollment' element={<MyEnrollment/>} />
      <Route path='/player/:courseId' element={<Player/>} />
      <Route path='/loading/:path' element={<Loading/>} />
      <Route path='/educator' element={<Educator/>} >
           <Route path='/educator' element={<Dashboard/>} />
           <Route path='add-Course' element={<AddCourse/>} />
           <Route path='my-courses' element={<MyCourses/>} />
           <Route path='student-enrolled' element={<StudentEnrolled/>} />
      </Route>
    </Routes>
   </div>
  )
}

export default App
