import React from 'react'
import Tabs from './Tabs'
import img from '../../../assets/Images/hero.png'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className='y-6'>
        <div className='p-6 md:px-12'>
            <Tabs/>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
                <div className='md:col-span-2 overflow-hidden rounded-3xl bg-white shadow-sm'>
                    <div className=''>
                        <img className='h-full w-full object-cover' src={img} alt="" />
                    </div>
                    <div className='p-6 space-y-6'>
                        <h3 className='text-xl md:text-2xl lg:text-3xl max-w-3xl font-semibold text-green-700'>Revolutionizing Cassava Production:Modern Techniques for 2025</h3>
                        <p className='max-w-2xl leading-6'>Explore the integration of automated harvesting and sustainable soil management that is doubling yields for farmers in the southwestern region of Nigeria</p>
                        <Link><p className='flex items-center gap-4 text-green-800'>Read Full Article<IoArrowForwardSharp/></p></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='p-6 shadow-md rounded-2xl space-y-6'>
                        <p className='text-green-600'>SEASONAL GUIDE</p>
                        <h3 className='text-lg md:text-xl font-semibold text-green-800'>Top 5 Crops to plant during the harmattan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non nulla voluptatum.</p>
                        <div className='flex justify-between'>
                            <p className='text-green-600'>Oct 12,2024</p>
                            <IoArrowForwardSharp className='text-green-600'/>
                        </div>
                    </div>

                    <div className='p-6 shadow-md rounded-2xl space-y-6'>
                        <p className='text-green-600'>INDUSTRY NEWS</p>
                        <h3 className='text-lg md:text-xl font-semibold text-green-800'>Top 5 Crops to plant during the harmattan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi non nulla voluptatum.</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-green-600'>Oct 12,2024</p>
                            <IoArrowForwardSharp className='text-green-600'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Blog