import React from 'react'
import logo from '../assets/logo.jpg'
import { MdOutlinePerson4 } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
   <div className=' fixed w-screen bg-black text-xl text-white z-10'>
    <div className=' px-10 flex flex-row items-center justify-between   mx-6'>
       
        <Link to='about' spy={true} smooth={true} duration={700} className='text-yellow-300 cursor-pointer '> <MdOutlinePerson4 className='h-[3rem] w-[3rem] ' /></Link>     
       
       <Link to='about' spy={true} smooth={true} duration={700}> < img src={logo} alt='dkbsdkv' className='h-[6rem] w-[6rem] cursor-pointer '/></Link>
         <a href="https://wa.me/9629669529" target='_blank'> <FaWhatsapp size={50} className='bg-green-500 rounded-full text-black  relative cursor-pointer'/></a> 
    
    </div>
    </div>
    
   
  )
}

export default Navbar
