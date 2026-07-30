import React from 'react'
import { BiCart } from 'react-icons/bi'
import Image1 from '../assets/Images/image1.jpg'

const Card = () => {
  return (
    <div className='w-64 min-h-80 shadow-2xl rounded-xl relative'>
        <img src={Image1} alt="Product" className='w-full h-48 object-cover rounded-t-2xl' />
        <span className='absolute top-8 left-2 text-green-800 font-semibold bg-green-300 rounded-2xl px-2 text-sm'>Tag</span>
        <div className='p-4 gap-2'>
            <p className='text-lg'>TITLE</p>
            <p className='text-xl text-black'>Name</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit possimus reprehenderit  
            </p>
            <div className='flex justify-between items-center mt-4'>
                <p>#3,000</p>
                <p className='size-4 p-4 justify-center items-center bg-green-300'><BiCart/></p>
            </div>
        </div>
    </div>
  )
}

export default Card