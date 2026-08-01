import React from 'react'
import Image1 from '../../../assets/Images/image1.jpg'
import Image2 from '../../../assets/Images/image2.jpg'
import Image3 from '../../../assets/Images/image3.jpg'
import Image4 from '../../../assets/Images/image4.jpg'
import { FaCartShopping } from 'react-icons/fa6'

const Featured = () => {
    const cards = [
        {image:Image1, title:"Organic Fertilizer",detail:"Soil enriching complex",price:"12,500"},
        {image:Image2, title:"Hybrid Maize Seeds",detail:"High Yield Variety",price:"4,200"},
        {image:Image3, title:"Irrigation Kits",detail:"Automatic drip System",price:"65,000"},
        {image:Image4, title:"Soil Testing Kits",detail:"Complete Nutrient Analysis",price:"28,500"},
    ]
  return (
    <div className='p-16 bg-gray-100 flex flex-col justify-center mx-auto'>
        <h2 className='text-2xl text-green-800 font-bold'>Featured Products</h2>
        <div className='flex justify-between'>
            <p>High Quality Agricultural products</p>
            <p>View all products</p>
        </div> 
        <div className='grid grid-cols-1 gap-8 mx-auto md:grid-cols-4 pt-12'>
            {cards.map((card)=>(
                <div key={card.title} className='bg-white flex flex-col  rounded-2xl transition-transform duration-300 hover:scale-105'>
                    <img src={card.image} alt="" className='object-cover w-full h-40 rounded-t-2xl'/>
                    <div className='p-6'>
                        <p className='mb-2 text-lg font-bold'>{card.title}</p>
                        <p className='mb-2 text-lg font-semibold'>{card.detail}</p>
                        <div className='flex items-center justify-between '>
                            <p className='text-semibold'>{card.price}</p>
                            <p className='bg-green-200 p-4 rounded-full'><FaCartShopping/></p> 
                        </div>
                    </div>
                    
                </div>
            ))}
            
        </div> 
    </div>
  )
}

export default Featured