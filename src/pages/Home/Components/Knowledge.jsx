import React from 'react'
import img1 from '../assets/Images/img1.jpg'
import img2 from '../assets/Images/img2.jpg'
import img3 from '../assets/Images/img3.jpeg'

const Knowledge = () => {
    const details = [
        {image:img1,tag:"YIELD TIPS",date:"MARCH 12, 2024",title:"MAXIMIZING YIELDS IN THE DRY SEASON",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem voluptatibus exercitationem tempore in alias cum sed molestiae tenetur velit"},
        {image:img2,tag:"PEST CONTROL",date:"FEBRUARY 28, 2024",title:"MODERN PEST MANAGEMENT FOR COCOA FARMS",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem voluptatibus exercitationem tempore in alias cum sed molestiae tenetur velit"},
        {image:img3,tag:"AQUACULTURE",date:"MARCH 12, 2024",title:"THE FUTURE OF CATFISH FARMING IN NIGERIA",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem voluptatibus exercitationem tempore in alias cum sed molestiae tenetur velit"}
    ]
  return (
    <div className='felx justify-center p-12 mx-auto w-full'>
        <h2 className='text-center text-2xl text-green-800 font-bold'>Knowledge Hub</h2>
        <p className='text-center'>Stay updated with the latest and modern Agricultural practices</p>
        <div className='grid grid-cols-1 gap-8 mx-auto md:grid-cols-3 pt-16'>
            {details.map((detail)=>(
            <div key={detail.title} className='w-90 bg-white rounded-2xl relative transition duration-300 hover:scale-105'>
                <div>
                    <img src={detail.image} alt="" className='w-full h-60 object-cover rounded-t-2xl'/>
                    <span className='absolute top-48 left-4 bg-green-800 p-2 rounded-4xl text-sm text-white'>{detail.tag}</span>
                </div>
                <div className='p-8'>
                    <p className='text-xl'>{detail.date}</p>
                    <p className='text-md text-green-800 font-semibold'>{detail.title}</p>
                    <p>{detail.desc}</p>
                    <p className='text-green-800 cursor-pointer'>Read Article</p>
                </div>
                
            </div>
        ))}
        </div>
        
    </div>
  )
}

export default Knowledge