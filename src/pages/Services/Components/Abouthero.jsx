import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const Abouthero = () => {
  return (
    <div className='flex items-center bg-green-100 w-full h-screen  p-16'>
        <div className='space-y-6 '>
        <p className='text-lg'>PREMIUM SOLUTIONS</p>
        <h2 className='text-6xl text-green-800 font-bold mt-8'>Elevating Nigerian <br/>Agriculture Through<br/>Experise</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quia beatae<br/> consequuntur inventore vel adipisci 
        enim quaerat cupiditate unde autem, tempora, molestiae, ipsum nostrum?
        </p> 
        <button className='flex items-center gap-2 bg-green-800 p-4 rounded-4xl text-white text-lg px-8'>Explore Services<BsArrowDown/></button>
        </div>
    </div>
  )
}

export default Abouthero