import React from 'react'

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
    const reps = [
        {icon:<FiPhone />,detail:"+234 800 AGRI PREMIUM"},
        {icon:<FiMail/>,detail:"consult@agripremium.com.ng"},
        {icon:<FiMapPin/>,detail:"Agri-Innovation Hub, Ikeja, Lagos"},
    ]
  return (
    <div className='flex max-w-6xl mx-auto bg-gray-200 mt-8 justify-center p-4 md:8 lg:16 rounded-2xl'>
        {/* Section1 */}
        <div className='grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-2xl min-h-150'>
            <div className='bg-green-700  p-8 pt-16 space-y-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none md:rounded-br-none'>
                <h3 className='text-3xl font-bold text-white'>Start Your Growth Journey <br/>Today</h3>
                <p className='text-white leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat tenetur saepe molestias fuga vero sed, odit sint consequuntur 
                dolorem nam maiores aperiam mollitia omnis doloremque nisi repudiandae id dolore ipsam?</p>
                <div>
                    {reps.map((rep)=>(
                        <div className='flex gap-x-4 my-4 items-center'>
                            <span className='bg-green-400 text-white p-4 rounded-full'>{rep.icon}</span>
                            <span className='text-white'>{rep.detail}</span>
                        </div>
                    ))}
                </div>
            {/* Section2 */}
            </div>
 
            <div className='bg-white p-10 md:p-14 rounded-b-2xl md:rounded-r-2xl rounded-tl-none rounded-bl-none'>
                <form className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                            <input type="text" placeholder='JohnDoe' className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700' />
                        </div>
                        <div>
                            <label className='block text-sm font-semibold text-gray-700 mb-2'>Service Needed</label>
                            <select name="" id="" className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700'>
                                <option value="">Fumigation</option>
                                <option value="">Farm Setup</option>
                                <option value="">Seed Suppy</option>
                                <option value="">Fish Farming</option>
                                <option value="">Nursery Plants</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className='mb-2 text-sm font-semibold text-gray-700'>
                            Prefered Date
                        </label>
                        <input type="date" className='w-full border border-gray-300  rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-700'/>
                    </div>
                    <div>
                        <label htmlFor="" className='mb-2 text-sm font-semibold text-gray-700'>Your Message</label>
                        <textarea name="" id="" placeholder='How can we help your farm today' className='w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-green-700'></textarea>
                    </div>
                    <button className='w-full bg-green-700 cursor-pointer text-white py-4 rounded-lg font-semibold hover:bg-green-900 transition duration-300 shadow-lg'>
                        Send Request
                    </button>
                </form> 
            </div>
        </div>
    </div>
  )
}

export default Contact