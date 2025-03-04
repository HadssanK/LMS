import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl max-auto'>
      Shape your future with courses tailored to your  <span className='text-blue-600 '>
      passion and goals
        <img src={assets.sketch} alt='sketch' className='md:block hidden absolute -bottom-7 right-0' /></span>
      </h1>
      <p className='md:block hidden text-gray-500 max-w-2xl max-auto'>we boring togather world class instructers. interactive content, and suppertive community to help you  achive your persnol and profissonal goals </p>

      <p className='md:hidden text-gray-500 max-w-sm max-auto'></p>
    <SearchBar/>
    </div>
  )
}

export default Hero