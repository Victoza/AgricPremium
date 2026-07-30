import React from 'react'
import img from '../../../assets/Images/commit.png'

const Commitment = () => {
  return (
    <div className='h-[1280] w-full bg-gray-50 p-16 block md:flex justify-center gap-8'>
        <div className='bg-blue-300 w-132 h-100 rounded-2xl bg-cover bg-center bg-no-repeat'style={{backgroundImage: `url(${img})`}}>

        </div>
        <div className='bg-gray-50  w-132 min-h-100 rounded-2xl p-4 space-y-4'>
            <h2 className='text-xl text-green-800'>OUR COMMITMENT</h2>
            <h3 className='text-2xl text-green-800 font-semibold'>Modernizing Nigerian Farming with <br/>Precision & Passion</h3>
            <p className='mb-4 leading-8 text-sm md:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illum perferendis
        a tempore obcaecati alias est excepturi fugiat ea laudantium odio, 
        quos necessitatibus quas, ipsa culpa possimus. Sunt, nihil? Non!</p>
        <p className='mt-4 leading-8 text-sm md:text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium illum perferendis
        a tempore obcaecati alias est excepturi fugiat ea laudantium odio</p>
        <div className='flex justify-between text-sm md:text-lg'>
            <div>
                <p>15+ Years</p>
                <p>Fiels Experience</p>
            </div>
            <div>
                <p>500+</p>
                <p>Farmers Supported</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Commitment