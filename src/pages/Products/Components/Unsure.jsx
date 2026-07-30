import React from 'react'
import { TbMicroscopeOff } from "react-icons/tb";

const Unsure = () => {
  return (
    <div className='flex justify-center py-12'>
        <div className='p-16 gap-6 flex flex-col justify-center min-w-250 h-70 bg-green-800 rounded-2xl text-white'>
            <h3 className='text-3xl font-semibold'>Unsure what your soil needs?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, porro at? Libero quam<br/>Aperiam, porro at? Libero quam</p>
            <div className='flex justify-between w-full'>
                <div className='flex justify-evenly gap-6'>
                    <button className='bg-green-400 rounded-3xl py-3 px-6'>Book Consultation</button>
                    <button className='bg-green-400 rounded-3xl py-3 px-6'>Caht with Expert</button>
                </div>
                <div>
                    <TbMicroscopeOff className='text-gray-500' size={64}/>
                </div>
            <div>
            
            </div>
            </div>
        </div>
    </div>
  )
}

export default Unsure