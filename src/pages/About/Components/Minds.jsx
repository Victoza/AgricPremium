import React from 'react'
import img1 from '../../../assets/Images/Raymond.jpg'
import img2 from '../../../assets/Images/Nneka.jpg'
import img3 from '../../../assets/Images/Solomon.jpg'

const Minds = () => {
  return (
    <section className='py-12'>
      <div className='flex flex-col md:flex-row justify-center gap-6 px-4 md:px-8'>
        <div className='space-y-4'>         
            <img className='rounded-xl w-80 h-100' src={img1} alt="" />
          <p className='text-2xl font-semibold text-green-800'>Dr. Adebayo Ogunlesi</p>
          <p className='text-lg text-green-700'>CHIEF EXECUTIVE OFFICER</p>
        </div>

        <div className='space-y-4'>  
            <img className='rounded-xl xl w-80 h-100' src={img2} alt="" /> 
          <p className='text-2xl font-semibold text-green-800'>Nneka Williams</p>
          <p className='text-lg text-green-700'>CHIEF OPERATIONS OFFICER</p>
        </div>

        <div className='space-y-4'>         
            <img className='rounded-xl xl w-80 h-100' src={img3} alt="" />
          <p className='text-2xl font-semibold text-green-800'>Solomon Yisa</p>
          <p className='text-lg text-green-700'>HEAD OF SUSTAINABILITY</p>
        </div>
      </div>
    </section>
  )
}

export default Minds