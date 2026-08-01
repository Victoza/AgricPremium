import React from 'react'
import { IoBugSharp } from "react-icons/io5";
import { IoFlaskOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { GiFruitTree } from "react-icons/gi";
import { LiaSeedlingSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";

const Services = () => {
    const services = [
        {"icon":<IoBugSharp size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<IoFlaskOutline size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<PiPlant size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<IoFishOutline size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<GiFruitTree size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<LiaSeedlingSolid size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":<IoMdChatbubbles size={32}/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
        {"icon":"⭐","title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
    ]
  return (
    <div className='bg-white p-4 md:p-8 lg:p-16 '>
        <p className='text-center mb-4'>EXPERT SOLUTIONS</p>
        <h2 className='text-center mb-16 text-2xl font-semibold'>Our Specialized Services</h2>
        <div className='grid grid-cols-1 mx-auto gap-6 md:grid-cols-4'>
            {services.map((service,index)=>(
                <div key={index} className='bg-white rounded-2xl p-8 gap-8 shadow-xl flex flex-col justify-center'>
                    <p className='bg-green-500 size-16 rounded-2xl text-center text-white flex justify-center items-center'>{service.icon}</p>
                    <p className='text-xl font-semibold'>{service.title}</p>
                    <p>{service.desc}</p>
                    <p>Learn more...</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Services