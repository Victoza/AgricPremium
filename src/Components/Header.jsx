import React from 'react'
import { PiPlant } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <>
    <section className=''>
    <div className='fixed top-0 left-0 right-0 z-50 bg-gray-200  shadow-2xl max-w-7xl flex justify-between items-center p-4'>
        <p className='text-xl font-bold flex gap-1 items-center text-green-800' >AgricPremium <PiPlant className='text-2xl sm:text-3xl'/></p>
        <ul className='cursor-pointer font-semibold gap-8 hidden md:flex'>
            <li className='text-green-800 border-b-4 border-transparent hover:border-green-800'><Link to="/">Home</Link></li>
            <li className='text-green-800 border-b-4 border-transparent hover:border-green-800'><Link to="/services">Services</Link></li>
            <li className='text-green-800 border-b-4 border-transparent hover:border-green-800'><Link to="/products">Products</Link></li>
            <li className='text-green-800 border-b-4 border-transparent hover:border-green-800'><Link to="/about">About Us</Link></li>
            <li className='text-green-800 border-b-4 border-transparent hover:border-green-800'><Link to="/articles">Articles</Link></li>
        </ul>
        <button className='bg-green-800 rounded-3xl text-white font-semibold py-2 px-4 hidden md:block'>Book Now</button>
        <button className='block md:hidden cursor-pointer' onClick={()=>setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <HiX className='text-green-800' size={36}/> : <IoMenu className='text-green-800' size={36}/>}</button> 
    </div>
    {/* Mobile Menu */}
    {}
    {isMenuOpen && (  
    <div className='md:hidden fixed top-0 left-0 right-0 z-30 flex flex-col space-y-4 justify-center bg-gray-100 w-full py-6'>
        <ul className='flex flex-col text-md font-semibold text-center space-y-4 cursor-pointer'>
            <a onClick={()=> setIsMenuOpen(false)} className='hover:bg-green-500 rounded-xl p-2'><Link to="/" >Home</Link></a>
            <a onClick={()=> setIsMenuOpen(false)} className='hover:bg-green-500 rounded-xl p-2'><Link to="/services">Services</Link></a>
            <a onClick={()=> setIsMenuOpen(false)} className='hover:bg-green-500 rounded-xl p-2'><Link to="/products">Products</Link></a>
            <a onClick={()=> setIsMenuOpen(false)} className='hover:bg-green-500 rounded-xl p-2'><Link to="/about">About Us</Link></a>
            <a onClick={()=> setIsMenuOpen(false)} className='hover:bg-green-500 rounded-xl p-2'><Link to="/articles">Articles</Link></a>
        </ul> 
        <button className='hover:bg-green-500 text-md font-semibold rounded-xl p-2 cursor-pointer'>Book Now</button> 
    </div>
        )}
    </section>
    </>
  )
}

export default Header