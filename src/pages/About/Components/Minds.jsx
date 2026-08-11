import React from 'react'
import img from '../../../assets/Images/man.jpg'

const Minds = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-3 gsp-6'>
        <div className='py-16 px-12'>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>

        <div className='py-16 px-12'>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>

        <div className='py-16 px-12'>         
            <img className='rounded-xl' src={img} alt="" />
          <p>Dr. Adebayo Ogunlesi</p>
          <p>CHIEF EXECUTIVE OFFICER</p>
        </div>
      </div>
    </section>
  )
}

export default Minds