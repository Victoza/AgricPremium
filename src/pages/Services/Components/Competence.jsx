import React from 'react'
import Card from '../../../Components/Card'
import Img from '../../../assets/Images/img1.jpg'
const Competence = () => {
  const Cards = [1,2,3,4,5,6,7,8]
  return (
    <div className='flex flex-col p-16 gap-6'>
       <h2 className='text-center text-2xl md:text-3xl font-semibold'>Our Core Competences</h2>
       <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aut et architecto?</p>
       {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
          {Cards.map((card) => (
             <Card key={card} />
          ))}
       </div>  */}
       <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-blue-200 col-span-2 h-100 rounded-2xl bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${Img})`}}>

          </div>
          <div className='bg-blue-200 h-100  rounded-2xl bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${Img})`}}>

          </div>
          <div className='bg-gray-100 h-80 rounded-2xl'>

          </div>
          <div className='bg-blue-200 h-80 rounded-2xl bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${Img})`}}>

          </div>
          <div className='bg-blue-200 h-60 rounded-2xl bg-green-800'>

          </div>
       </div>
    </div>
  )
}

export default Competence