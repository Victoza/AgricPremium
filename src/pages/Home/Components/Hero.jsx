import React from 'react'
import hero from '../../../assets/Images/hero.png'
import { BiCalendar } from 'react-icons/bi'

const Hero = () => {
  return (
    // 
    <div className='flex min-h-screen bg-green-100 px-4 md:px-8 lg:px-16 w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${hero})`}} >
      <div className='container mx-auto flex items-center'>
          <div className='w-full flex flex-col justify-center gap-8'>
              <p className='text-4xl md:text-5xl lg:text-6xl white-space-nowrap font-bold text-white'>Cultivating Excellence in Nigerian Agriculture</p>
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt. distinctio fugit<br/> dolorem eum ducimus quo? Dolor ab totam ea sed ullam cupiditate fugit exercitationem!</p>
              <div className='flex flex-col md:flex-row space-x-8 gap-4'>
                  <button className='bg-green-800 flex justify-center items-center gap-2 rounded-3xl text-white font-semibold px-4 py-4'>Book Appointment<BiCalendar/></button>
                  <button className='bg-transparent text-white border-2 border-white hover:bg-green-700 hover:text-white hover:border-0 rounded-3xl px-8 py-4'>Explore Services</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero