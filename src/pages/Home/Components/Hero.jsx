import React from 'react'
import hero from '../../../assets/Images/hero.png'
import { BiCalendar } from 'react-icons/bi'

const Hero = () => {
  return (
    // 
    <section className='py-12 lg:py-24 bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${hero})`}} id='home'>
      <div className='flex px-6 md:px-8 lg:px-16 max-w-7xl'>
        <div className='flex items-center py-12'>
            <div className='w-full flex flex-col py-6 justify-center gap-8'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl max-w-2xl white-space-nowrap font-bold text-white'>Cultivating Excellence in Nigerian Agriculture</h1>
                <p className='text-white max-w-xl'>Premium Agricultural solutions for sustainable growth and food security. We bridge the gap between traditional wisdom and modern Technology.</p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <button className='flex justify-center items-center text-white gap-2 text-xl bg-green-700 px-6 py-3 rounded-full'>
                      Book Appointment <BiCalendar size={24}/>
                    </button>
                    <button className='flex justify-center items-center text-white gap-2 text-xl bg-transparent px-6 py-3 rounded-full border-2 border-white'>
                      Explore Services
                    </button>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero