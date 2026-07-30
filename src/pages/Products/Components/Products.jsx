import React from 'react'

import { IoFilter } from "react-icons/io5";
import Card from '../../../Components/Card';

const Products = () => {
    const Buttons = ["All Products","Fertilizers", "Seeds","Irrigation Kits","Soil Testing"];
    const prods = [1,2,3,4,5,6,7,8]
  return (
    <div className='justify-center p-16'>
        <div className=''>
            <h3 className='mb-4'>PREMIUM INPUTS</h3>
            <h2  className='text-4xl font-semibold mb-8'>Precision Cultivation Catalog</h2>
            <div className='flex justify-between gap-4'>
                <p className='mb-6'>High-performance seeds,fertilizers and 
                smart irrigationsysytems curated <br/>for the modernNigeian Agri-business
                </p>  
            </div>  
        </div>
        <div className='flex gap-2'>
            <button className='flex items-center  border rounded-xl'><IoFilter /> Filter</button>
            <button className='p-2 border rounded'>Sort by Featured</button>
        </div>
        <div className='flex gap-2 py-8'>
            {Buttons.map((button, index) => (
            <button key={index} className='py-2 px-6 bg-green-500 rounded-3xl'>
                {button}
            </button>
            ))}
        </div>
        <div className=' grid justify-center grid-cols-2 md:grid-cols-4 gap-12'>
            {prods.map((prod) =>(
                <Card/>
            ))}
        </div>
    </div>
  )
}

export default Products