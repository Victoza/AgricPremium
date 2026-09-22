import React from 'react'
import Card from '../../../Components/Card'
import man from '../../../assets/Images/man.jpg'

const Consultation = () => {
  return (
    <div className='flex bg-gray-50 justify-center px-4 md:px-8 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-16 px-4 bg-green-700 rounded-3xl space-y-6 p-6 lg:p-16 '>
            <div className='space-y-6'>
                <h3 className='text-white text-3xl'>Expert Agricultural Consultations</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, saepe voluptatum. Ducimus
                   exercitationem vitae magnam! Vel omnis optio quae natus labore veritatis, cum, praesentium
                   sequi delectus pariatur cupiditate, deleniti atque?
                </p>
                <div className='flex space-x-4 relative'>
                    <div className='bg-green-500 opacity-80 rounded-2xl w-64 p-4'>
                        <p className='text-green-900'>Feasibility Studies</p>
                        <p className='text-white max-w-2xl text-sm md:text:lg'>Comprehensive market and land analysis.</p>
                    </div>
                    <div className='bg-green-800 opacity-80 rounded-2xl p-4'>
                        <p className='text-green-300'>Farm Management</p>
                        <p className='text-white max-w-2xl text-sm md:text:lg'>Strategic operational oversight and training.</p>
                    </div>    
                </div>
                
            </div>
            <div>
                <div  className='size-60 md:size-80 rounded-full bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${man})`}}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation