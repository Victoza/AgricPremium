import React from 'react'
import img from '../../../assets/Images/commit.png'
import { BsAward } from "react-icons/bs";

const Commitment = () => {
  return (
    <section className=' w-full bg-gray-50 px-6 py-12 block md:flex justify-center items-center gap-8'>
        <div className='relative bg-blue-300 flex-1 h-100 rounded-2xl bg-cover bg-center bg-no-repeat'style={{backgroundImage: `url(${img})`}}>
            <div className='absolute flex gap-6 bg-white shadow-lg rounded-2xl px-4 py-3 lg:p-8 -bottom-4 -right-4'>
                <div className='flex justify-center items-center bg-green-700 rounded-full size-12'>
                    <BsAward size={24} className='text-white'/>
                </div>
                <div>
                    <p className='text-green-600 text-lg font-semibold'>#1 in Nigeria</p>
                    <p className='text-gray-800 text-lg'>Agri-solution Provider</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-50 flex-1 rounded-2xl pt-12 p-4 space-y-4'>
            <h2 className='text-xl text-green-800 font-semibold'>OUR COMMITMENT</h2>
            <h3 className='text-2xl text-green-800 font-bold'>Modernizing Nigerian Farming with <br/>Precision & Passion</h3>
            <p className='mb-4 leading-8 text-sm md:text-lg'>
        At AgricPremium Nigeria we believe that food security is the backbone of national prosperity. Our mission is to empower local farmers by providing world-class agricultural services, inputs and expert guidance.</p>
        <p className='mt-4 leading-8 text-sm md:text-lg'>From our state-of-the-art nurseries in Lagos to expansive fish farms in the North, we combine Nigerian farming heritage with cutting edge global agronomy standards.</p>
        <div className='flex flex-col gap-6 sm:flex-row justify-between text-sm md:text-lg'>
            <div>
                <p className='text-green-900 font-semibold'>15+ Years</p>
                <p className='text-gray-800'>Field Experience</p>
            </div>
            <div>
                <p className='text-green-900 font-semibold'>500+</p>
                <p className='text-gray-800'>Farmers Supported</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Commitment