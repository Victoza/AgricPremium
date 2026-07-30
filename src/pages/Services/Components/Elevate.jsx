import React from 'react'

const Elevate = () => {
  return (
    <div className='flex flex-col items-center p-16 bg-gray-100 h-85 gap-6'>
      <h3 className='text-md md:text-2xl text-center font-semibold'>Ready to elevate your Agricultural output?</h3>
      <p className='text-center'>Our team is ready to discuss your project requirements and provide a tailored solution that meets your goals</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-6'>
        <button className='bg-green-400 text-md font-semibold py-4 cursor-pointer px-8 rounded-4xl'>Book a Consultation</button>
        <button className='bg-gray-200 text-md font-semibold py-4 px-8 cursor-pointer rounded-4xl'>Download Service Guide</button>
      </div>  
    </div>
  )
}

export default Elevate