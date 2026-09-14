import React from 'react'
import img from '../../../assets/Images/hero.png'

const Responsibility = () => {
  return (
    <section>
      <div className='container mx-auto flex flex-col md:flex-row gap-6 px-4 md:px-6 lg:px-8'>
        <div className='flex items-center flex-1 py-6'>
          <img className='rounded-3xl ' src={img} alt="" />
        </div>
        <div className='flex-1 py-6 md:py-8 px-4'>
          <h3 className='text-lg md:text-xl lg:text-2xl font-semibold'>Rooted in Responsibility</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odio ipsam reprehenderit.</p>
          <div className='space-y-4'>
            <h4 className='text-sm md:text-lg lg:text-xl font-semibold'>Eco-Conscious Fumigation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
              ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
            </p>

            <h4 className='text-sm md:text-ld lg:text-xl font-semibold'>Eco-Conscious Fumigation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
              ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
            </p>

            <h4 className='text-sm md:text-lg lg:text-xl font-semibold'>Eco-Conscious Fumigation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum deleniti vero 
              ducimus minus delectus molestiae earum iure debitis voluptatum inventore!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Responsibility