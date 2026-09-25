import React from 'react'
import { IoBugSharp } from "react-icons/io5";
import { IoFlaskOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { IoFishOutline } from "react-icons/io5";
import { GiFruitTree } from "react-icons/gi";
import { LiaSeedlingSolid } from "react-icons/lia";
import { IoMdChatbubbles } from "react-icons/io";
import { BiArrowToRight, BiRightArrow } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { BiSolidConversation } from "react-icons/bi";

const Services = () => {
    const services = [
        {"icon":<IoBugSharp size={32}/>, "title": "Fumigation & Pest Control","desc":"Protect your crops, homes, and farms from harmful pests with safe and effective pest control solutions."},
        {"icon":<IoFlaskOutline size={32}/>,"title":"Professional Spraying","desc":"Get precise and effective crop spraying services to control pests, diseases, and weeds while supporting healthy growth." },
        {"icon":<PiPlant size={32}/>,"title":"Nursery Plants","desc":"Get healthy, carefully nurtured plants suitable for farming, landscaping, gardening, and commercial cultivation."},
        {"icon":<IoFishOutline size={32}/>,"title":"Fish Farming","desc":"Build a productive fish farm with quality fingerlings, proper management, and practical aquaculture support."},
        {"icon":<GiFruitTree size={32}/>,"title":"Fruit Tree Planting","desc":"Start your orchard with healthy fruit trees and practical planting guidance for long-term growth and productivity." },
        {"icon":<LiaSeedlingSolid size={32}/>,"title":"Premium Seed Sales","desc":"Choose quality seeds selected to support strong germination, healthy crops, and better agricultural yields." },
        {"icon":<IoMdChatbubbles size={32}/>,"title":"Expert Consultations","desc":"Get practical support with planning, crop management, farm operations, and strategies for improving productivity." },
        // {"icon":<BiSolidConversation/>,"title":"Fumigation & Pest Control","desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, at maiores! Aperiam." },
    ]
  return (
    <section className='py-12'>
        <div className='bg-white'>
            <p className='text-center mb-4 text-green-950 font-semibold'>EXPERT SOLUTIONS</p>
            <h2 className='text-center mb-16 text-2xl text-green-900 font-semibold'>Our Specialized Services</h2>
            <div className='grid grid-cols-1 mx-auto gap-6 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6 lg:px-8'>
                {services.map((service,index)=>(
                    <div key={index} className={`bg-white rounded-2xl p-8 gap-8 shadow-xl flex flex-col justify-center ${index === services.length - 1 ? 'lg:col-span-2' : ''}`}>
                        <p className='bg-green-800 size-16 rounded-2xl text-center text-white flex justify-center items-center'>{service.icon}</p>
                        <p className='text-xl text-green-700 font-semibold'>{service.title}</p>
                        <p className='text-gray-800'>{service.desc}</p>
                        {/* <a className='text-green-800 inline-flex items-center gap-2'>Learn more <BsArrowRight/></a> */}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services