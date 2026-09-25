import React from 'react'
import Image1 from '../../../assets/Images/image1.jpg'
import Image2 from '../../../assets/Images/image2.jpg'
import Image3 from '../../../assets/Images/image3.jpg'
import Image4 from '../../../assets/Images/image4.jpg'
import { FaCartShopping } from 'react-icons/fa6'


const Featured = () => {
    const cards = [
        {image:Image1, title:"Organic Fertilizer",detail:"Soil enriching complex",price:"12,500"},
        {image:Image3, title:"Hybrid Maize Seeds",detail:"High Yield Variety",price:"4,200"},
        {image:Image2, title:"Irrigation Kits",detail:"Automatic drip System",price:"65,000"},
        {image:Image4, title:"Soil Testing Kits",detail:"Complete Nutrient Analysis",price:"28,500"},
    ]
  return (
    <section className='py-8'>
        <div className='p-4 md:p-8 lg:p-16 bg-gray-100 flex flex-col '>
            <h2 className='text-2xl text-green-800 font-bold'>Featured Products</h2>
            <div className='flex justify-between space-y-6'>
                <p className='text-sm md:text-lg lg:text-xl'>High Quality Agricultural products</p>
                <p className='text-sm md:text-lg lg:text-xl'>View all products</p>
            </div> 
            <div className='w-full overflow-x-auto'>
                <div className='flex justify-center min-w-max gap-6'>
                {cards.map((card,index)=>(
                    <div key={index} className='bg-white flex flex-col rounded-2xl transition-transform duration-300 hover:scale-105'>
                        <img src={card.image} alt="" className='object-cover w-full h-40 rounded-t-2xl'/>
                        <div className='p-6'>
                            <p className='mb-2 text-lg font-bold text-green-900'>{card.title}</p>
                            <p className='mb-2 text-sm font-light'>{card.detail}</p>
                            <div className='flex items-center justify-between gap-4'>
                                <p className='font-semibold'>#{card.price}</p>
                                <p className='border border-green-600 p-4 rounded-full'><FaCartShopping className='text-green-900'/></p> 
                            </div>
                        </div>
                        
                    </div>
                ))}
              </div>  
            </div> 
        </div>
    </section>
  )
}

export default Featured