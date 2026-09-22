import React from 'react'
import { BiCart } from 'react-icons/bi'
import Image1 from '../assets/Images/image1.jpg'

const Card = () => {
  return (
    <div className=' shadow-2xl rounded-xl relative'>
        <img src={Image1} alt="Product" className='w-full h-48 object-cover rounded-t-2xl' />
        <span className='absolute top-8 left-2 text-green-800 font-semibold bg-green-300 rounded-full px-3 py-1 text-sm'>Best seller</span>
        <div className='p-6 gap-2 space-y-4'>
            <p className='text-sm'>Category</p>
            <p className='text-lg font-semibold text-green-800'>Premium Organic NPK</p>
            <p>High Nitrogen formula optimized for West-African soil conditions...</p>
            <div className='flex justify-between items-center mt-4'>
                <p className='text-lg font-semibold'>#3,000</p>
                <p className='rounded-full p-4 justify-center items-center text-green-900 bg-gray-200'><BiCart size={24}/></p>
            </div>
        </div>
    </div>
  )
}

export default Card