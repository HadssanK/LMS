import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { SignIn, useClerk, UserButton , useUser  } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {

const {openSignIn} = useClerk();
const {user} = useUser();
const {navigate  , isEducator } = useContext(AppContext);



  const isCourseListPage = window.location.pathname === '/course-List';
  return (
    <div className={`flex justify-between items-center px-4 sm:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>

      
      <h1 onClick={()=>navigate("/")} className='md:text-2xl w-28 lgl:w-32 cursor-pointer'>卄𝓪ss𝓪n</h1>
      <div className='hidden md:flex items-center gap-2 text-gray-500'>
      <div className='flex item-center gap-5'>
     {
      user && <>
      <button onClick={()=>navigate("/educator")}>{
        isEducator?"Educator Dashboard":"Become educator"
      }</button>|
      <Link to={"/my-enrollment"} >My Enrollment</Link>

      </>
     }
      </div>
     {
        user ? <UserButton /> :  <button onClick={()=>openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create account</button>
     }
      </div>
{/* for small screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
      <div className='flex item-center gap-1 sm:gap-2 ms:xm:text-xs'>
      {
      user && <>
      <button onClick={()=>navigate("/educator")}>{
        isEducator?"Educator Dashboard":"Become educator"
      }</button>|
      <Link to={"/my-enrollment"} >My Enrollment</Link>

      </>
     }
      </div>
      {
        user ? <UserButton/> 
        : <button onClick={()=>openSignIn()}><img src={assets.user_icon}  /></button>

      }
      </div>
    </div>
  )
}

export default Navbar