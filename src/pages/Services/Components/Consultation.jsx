import React from 'react'
import Card from '../../../Components/Card'
import man from '../../../assets/Images/man.jpg'

const Consultation = () => {
  return (
    <div className='flex justify-center px-8 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-16 bg-green-900 rounded-3xl min-h-120 space-y-6 p-16 w-284'>
            <div className='space-y-6'>
                <h3 className='text-white text-3xl'>Expert Agricultural Consultations</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, saepe voluptatum. Ducimus
                   exercitationem vitae magnam! Vel omnis optio quae natus labore veritatis, cum, praesentium
                   sequi delectus pariatur cupiditate, deleniti atque?
                </p>
                <div className='flex space-x-4 relative'>
                    <span className='bg-green-200 opacity-4 rounded-2xl w-64 p-4'>
                        <p className='text-white text-sm md:text:lg'>Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit. Quam, saepe voluptatum.</p>
                    </span>
                    <span className='bg-green-200 opacity-4 rounded-2xl w-64 p-4'>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit. Quam, saepe voluptatum.</p>
                    </span>    
                </div>
                
            </div>
            <div>
                <div  className='bg-green-400 size-60 md:size-80 rounded-full bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${man})`}}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consultation