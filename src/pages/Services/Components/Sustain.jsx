import React from 'react'

const Sustain = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 space-y-16 p-16 mx-auto'>
        <div className='space-y-4'>
            <h3 className='text-3xl'>Sustainabe Fruit Tree Planting</h3>
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
        <div className=' bg-green-500 rounded-2xl w-120 h-100 relative'>
            <div className='bg-gray-200 rounded-2xl w-48 h-36 absolute top-56 left-64'>

            </div>
        </div>
    </div>
  )
}

export default Sustain