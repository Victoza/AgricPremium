import React from 'react'
import Tabs from './Tabs'
import img from '../../../assets/Images/hero.png'

const Blog = () => {
  return (
    <section className='y-6'>
        <div className='container mx-auto p-6 md:px-12'>
            <Tabs/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                <div className='md:col-span-2 overflow-hidden rounded-3xl bg-white shadow-sm'>
                    <div className=''>
                        <img className='h-full w-full object-cover' src={img} alt="" />
                    </div>
                    <div className='p-6'>
                        <h3 className='text-xl md:text-2xl lg:text-3xl text-green-700'>Revolutionizing Cassava Production:Modern Techniques for 2025</h3>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='p-6 shadow-md rounded-2xl space-y-6'>
                        <p className='font-bold'>SEASONAL GUIDE</p>
                        <h3 className='text-lg md:text-xl font-semibold text-green-700'>Top 5 Crops to plant during the harmattan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non nulla voluptatum.</p>
                        <div className='flex justify-between'>
                            <p>Oct 12,2024</p>
                            <p>Icon</p>
                        </div>
                    </div>

                    <div className='p-6 shadow-md rounded-2xl space-y-6'>
                        <p className='font-bold'>SEASONAL GUIDE</p>
                        <h3 className='text-lg md:text-xl font-semibold text-green-700'>Top 5 Crops to plant during the harmattan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non nulla voluptatum.</p>
                        <div className='flex justify-between'>
                            <p>Oct 12,2024</p>
                            <p>Icon</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog