import React from 'react'
import img from '../../../assets/Images/hero.png'

const ArticleHero = () => {
  return (
    <section className='py-12 flex items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto p-6 md:p-12 gap-6'>
        <div className='space-y-4 md:space-y-6'>
          <p className='text-green-950'>Knowledge Hub</p>
          <h2 className='text-2xl text-green-700 md:text-4xl lg:text-5xl font-semibold'>Cultivating Nigerian Agricultural Experience</h2>
          <p className='max-w-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae quidem perspiciatis! 
            Dignissimos, laudantium! Perspiciatis, 
            similique quia exercitationem corrupti eligendi culpa illo itaque sed?
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
            <button className='bg-green-800 rounded-full text-white px-6 py-2 cursor-pointer'>Explore Topics</button>
            <button className='bg-white rounded-full text-green-700 border px-6 py-2 cursor-pointer'>Subscribe</button>
          </div>
        </div>
        
        <div>
          <img className='rounded-3xl h-100' src={img} alt="image of a farmland" />
        </div>
      </div>
    </section>
  )
}

export default ArticleHero