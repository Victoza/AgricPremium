import React from 'react'
import Card from '../../../Components/Card'
import Img from '../../../assets/Images/img1.jpg'
import spray from '../../../assets/Images/spraying.jpg'
import plant from '../../../assets/Images/plant.jpg'
import { BiArrowToRight, BiLeaf } from 'react-icons/bi'
import { GiFlowerPot } from 'react-icons/gi'
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
          <div className=' col-span-2 h-100 rounded-2xl bg-center bg-no-repeat bg-cover' style={{backgroundImage:`url(${Img})`}}>

          </div>
          <div className=' h-100  rounded-2xl bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${spray})`}}>

          </div>
          <div className=' h-80 rounded-2xl p-4 space-y-8'>
            <div className='flex justify-center items-center size-16 rounded-2xl bg-green-800'><GiFlowerPot className='text-white' size={36}/></div>
            <p className='text-lg text-green-800 font-semibold'>Nursery Plants</p>
            <p className='text-sm text-green-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolorum quaerat, velit voluptas ipsum voluptate? Quo.</p>
            <p className='flex items-center text-sm font-semibold text-green-800'>Browse Catalog<BiArrowToRight/></p>
          </div>
          <div className=' h-80 rounded-2xl bg-center bg-no-repeat bg-cover'style={{backgroundImage:`url(${plant})`}}>

          </div>
          <div className=' h-60 rounded-2xl bg-green-800 p-4 space-y-4'>
            <div className='flex justify-between items-center gap-4'>
               <div className='flex justify-center items-center size-12 rounded-full p-2 bg-green-300'><BiLeaf size={24}/></div>
               <span className='text-sm text-green-300 bg-green-500 rounded-3xl py-2 px-4'> CERTIFIED</span>
            </div>
            <p className='text-lg font-semibold text-white'>Premium Seeds Sales</p>
            <p className='text-white text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-sm text-green-300'>View Varieties</p>
          </div>
       </div>
    </div>
  )
}

export default Competence