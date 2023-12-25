import React from 'react'
import video from '../assets/video/hero.mp4'

const Hero = () => {
  return (
  <>
  <div className=' flex flex-col pt-[7rem]'>
    <div className=' '>
        <video src={video} className='h-fit' alt='the hero' autoPlay loop muted/>
    </div>
    <div className='flex items-center justify-center mt-10 mb-5'>
    <h1 className='text-4xl lg:text-7xl font-extrabold lg:font-extrabold  bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent subpixel-antialiased '> # STAY REAL</h1>

    </div>
    </div></>
  )
}

export default Hero
