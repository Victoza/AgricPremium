import React from 'react'

const Tabs = () => {
    const Buttons = ["All Articles","Seasonal Planting","Tech in Farming","Market Analysis","Sustainable Agriculture"]
  return (
    <div className='w-full overflow-x-auto'>
        <div className='flex justify-center min-w-max gap-6'>
            {Buttons.map((button)=>(
                <button className='px-6 py-2 rounded-full mx-4 my-4 bg-green-100 cursor-pointer'>{button}</button>
            ))}
        </div>
    </div>
  )
}

export default Tabs