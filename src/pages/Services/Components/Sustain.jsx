import React from 'react'
import plant from '../../../assets/Images/soursop.jpg'

const Sustain = () => {
  return (
    <section className='py-8'>
        <div className=' px-4 md:px-8 lg:px-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-16'>
                <div className='space-y-4'>
                    <h3 className='text-3xl text-green-800'>Sustainabe Fruit Tree Planting</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolore voluptates 
                        totam quo porro exercitationem qui quidem obcaecati, autem veniam saepe non, 
                        adipisci optio eos fugit esse commodi tenetur. Saepe.
                    </p>
                    <p>Soil Analysis & Preparation</p>
                    <p>Strategic Orchard Layout Design</p>
                    <p>Ongoing Maintenace and Pruning</p>
                    <button className='bg-green-800 px-6 py-4 rounded-4xl text-white'>Start Your Orchard</button>
                </div>
                <div className='relative bg-green-500 rounded-2xl w-60% h-100 bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${plant})`}}>
                    <div className='bg-gray-200 rounded-2xl w-52 h-36 p-4 absolute -bottom-6 -right-2'>
                        <p className='text-green-700 text-sm font-semibold'><q>AgricPremium transformed our idle land into a thriving citrus plantation in just two seasons</q></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sustain