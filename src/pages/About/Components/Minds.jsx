import React from 'react'
import img from '../../../assets/Images/man.jpg'

const Minds = () => {
  return (
    <section className='py-12'>
      <div className='w-full mx-auto grid grid-cols-2 md:grid-cols-3 '>
        <div className='p-6 '>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>

        <div className='p-6'>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>

        <div className='p-6'>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>
      </div>
    </section>
  )
}

export default Minds