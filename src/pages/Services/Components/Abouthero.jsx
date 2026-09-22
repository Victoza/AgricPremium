import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const Abouthero = () => {
  return (
    <section className='py-12 bg-green-100'>
      <div className='flex items-center px-6 md:px-8 lg:px-12 py-16'>
          <div className='space-y-6 '>
          <p className='text-lg'>PREMIUM SOLUTIONS</p>
          <h2 className='text-6xl text-green-800 font-bold mt-8'>Elevating Nigerian <br/>Agriculture Through<br/>Experise</h2>
          <p className='max-w-2xl leading-6'>We provide a comprehensive suite of professional agricultural services designed for growth, sustainability and high-yield performance in themodern Nigerian landscape.</p> 
          <button className='flex items-center gap-2 bg-green-800 p-4 rounded-4xl text-white text-lg px-8'>Explore Services<BsArrowDown/></button>
          </div>
      </div>
    </section>
  )
}

export default Abouthero