import React from 'react'
import hero from '../../../assets/Images/hero.png'
import { BiCalendar } from 'react-icons/bi'

const Hero = () => {
  return (
    // 
    <div className='flex h-140 bg-green-100 p-16 w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${hero})`}} >
        <div className='w-full flex flex-col justify-center gap-8'>
            <p className='text-6xl font-bold text-white'>Cultivating Excellence in<br/>Nigerian Agriculture</p>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt. distinctio fugit<br/> dolorem eum ducimus quo? Dolor ab totam ea sed ullam cupiditate fugit exercitationem!</p>
            <div className='flex space-x-8'>
                <button className='bg-green-800 flex justify-center items-center gap-2 rounded-3xl text-white font-semibold px-8 py-4'>Book Appointment<BiCalendar/></button>
                <button className='bg-transparent text-white border-2 border-white hover:bg-green-700 hover:text-white hover:border-0 rounded-3xl px-8 py-4'>Explore Services</button>
            </div>
        </div>
    </div>
  )
}

export default Hero