import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
         <div className='flex flex:col md:flex-row item-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
            <div className='flex flex-col md:items-start items-center w-full'>
            <h1 onClick={()=>navigate("/")} className='md:text-2xl w-28 lgl:w-32 cursor-pointer text-white'>卄𝓪ss𝓪n</h1>

              <p className='mt-6 text-center md:text-left text-sm text-white/80'>GreatStack is a platform to learn and grow your skieatStack is a platform to learn and grow your skieatStack is a platform to learn and grow your skills</p>
            </div>
            <div className='flex flex-col md:items-start items-center w-full'>
              <h2 className='font-semibold text-white mb-5'>Company</h2>
              <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:sapce-y-2'>
                <li><a href='#' >Home</a></li>
                <li><a href='#' >about us</a></li>
                <li><a href='#' >Contact us </a></li>
                <li><a href='#' >Privacy policy </a></li>
               
              </ul>
            </div>
            <div className='hidden md:flex flex-col md:items-start w-full'>
               <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
               <p className='text-sm text-white/80'>
                The Latest news, articles, and resources, sent to your inbox weekly.
               </p>
               <div className="flex items-center gap-2 pt-4">
                <input type='text' placeholder='Enter your email' className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
                <button className='bg-blue-600 text-white px-5 py-2 rounded-full'>Subscribe</button>
               </div>
            </div>
         </div>
         <p className='py-4 text-center text-xs md:text-sm text-white/60'>copyright  2025 @ GreatStack. All Right Reserved.</p>
    </footer>
  )
}

export default Footer