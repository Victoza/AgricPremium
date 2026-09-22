import React from 'react'
import img from '../../../assets/Images/hero.png'
import { BsDropletFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { PiFarmFill } from "react-icons/pi";

const Responsibility = () => {
  return (
    <section className='bg-gray-100 py-12'>
      <div className='flex flex-col md:flex-row gap-6 px-4 md:px-6 lg:px-8'>
        <div className='flex items-center flex-1 py-6'>
          <img className='rounded-3xl ' src={img} alt="" />
        </div>
        <div className='flex-1 py-6 md:py-8 px-4'>
          <h3 className='text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold mb-2'>Rooted in Responsibility</h3>
          <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio ipsam reprehenderit.</p>
          <div className='space-y-4'>
            <div className='flex gap-4'>
              <FaLeaf className='text-green-800' size={64}/>
              <div>
                <h4 className='text-sm md:text-lg lg:text-xl text-gray-600 font-semibold'>Eco-Conscious Fumigation</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
                  ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <BsDropletFill className='text-green-800' size={64}/>
              <div>
                <h4 className='text-sm md:text-lg lg:text-xl text-gray-600 font-semibold'>Eco-Conscious Fumigation</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
                  ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
                </p>
              </div>
            </div>

            <div className='flex gap-4'>
              <PiFarmFill className='text-green-800' size={64}/>
              <div>
                <h4 className='text-sm md:text-lg lg:text-xl text-gray-600 font-semibold'>Eco-Conscious Fumigation</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
                  ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Responsibility