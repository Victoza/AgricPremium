import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { FaTelegram } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className=''>
        <div className='bg-green-800 p-12 grid grid-cols-1 md:grid-cols-4 text-gray-300'>
            <div>
                <p className='text-xl font-semibold mb-8'>AgricPremium</p>
                <p className='text-md'>Driving the future of Agricultural productivity in Nigeria through science,commitment and excellence in every harvest</p>
            </div>
            <div className='pl-8'>
                <h2 className='mb-6 text-md font-bold'>Quick Links</h2>
                <ul>
                    <li>Services</li>
                    <li>Our Products</li>
                    <li>Article Hub</li>
                    <li>Consultation</li>
                </ul>
            </div>
            <div>
                <h2 className='mb-6 text-md font-bold'>Legal</h2>
                <ul className='flex flex-col gap-4'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Export Licensing</li>
                    <li>Consultation</li>
                </ul>
            </div>
            <div >
                <p className='mb-6 text-md font-bold'>NewsLetter</p>
                <p>Get seasonal farming tips and market price updates directly</p>
                <div className='flex space-x-4 mt-6'>
                    <input type="text" placeholder='Email' className='bg-transparent border-2 p-2 rounded-xl outline-none'/>
                    <button><FaTelegram size={36}/></button>
                </div>
            </div>
        </div>
        <div className='flex justify-between bg-green-800 border border-t-gray-500 p-4 text-gray-300'>
            <p>2024 AgricPremium Nigeria. Excellence in Growth</p>
            <div className='flex gap-4'>
                <p>Registration No:RC 1234567</p>
                <p className='flex items-center'>Made with <BiHeart size={16}/> for Nigerian farmers</p>
            </div>
        </div>
    </footer>
  )
}
export default Footer