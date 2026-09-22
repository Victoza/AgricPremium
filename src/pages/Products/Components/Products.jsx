import React from 'react'

import { IoFilter } from "react-icons/io5";
import Card from '../../../Components/Card';

const Products = () => {
    const Buttons = ["All Products","Fertilizers", "Seeds","Irrigation Kits","Soil Testing"];
    const prods = [1,2,3,4,5,6,7,8]
  return (
    <section className='py-12'>
        <div className='max-w-7xlpx-4 px-4 md:px-8 lg:px-12'>
        <div className='pt-16 md:pt-24'>
            <h3 className='mb-4 text-gray-600'>PREMIUM INPUTS</h3>
            <h2  className='text-4xl text-green-800 font-semibold mb-8'>Precision Cultivation Catalog</h2>
            <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6'>
                <p className='mb-6 max-w-xl text-gray-800'>High-performance seeds,fertilizers and 
                smart irrigation systems curated for the modernNigeian Agri-business
                </p>  
                <div className='flex justify-end gap-2'>
                    <button className='flex items-center rounded-xl px-2 text-green-900 border border-green-900'><IoFilter /> Filter</button>
                    <button className='p-2 rounded-xl px-2 text-green-900 border border-green-900'>Sort by Featured</button>
                </div>
            </div>  
        </div>
        
         <div className='py-8 overflow-x-auto'>
            <div className='flex gap-2 min-w-max'>
                {Buttons.map((button, index) => (
                <button key={index} className='py-2 px-6 bg-green-100 rounded-3xl'>
                    {button}
                </button>
                ))}
            </div>
        </div> 
        <div className=' grid justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {prods.map((prod) =>(
                <Card/>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Products