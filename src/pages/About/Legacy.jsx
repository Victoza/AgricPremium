import React from 'react'

const Legacy = () => {
  return (
    <section className='py-12 px-6 md:px-16'>
      <div className=' bg-green-700 rounded-2xl flex flex-col space-y-8 p-8 md:p-16 items-center justify-center'>
        <h2 className='text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold'>Join Our Growing Legacy</h2>
        <p className='text-center max-w-2xl'>Whether you're looking for premium agricultural services or interested in a sustainable partnership, we are ready to elevate your journey.
        </p>
        <div className='flex flex-col md:flex-row gap-6'>
          <button className='px-6 py-4 bg-green-900 rounded-full text-white cursor-pointer'>Work With Us</button>
          <button className='px-6 py-4 bg-transparent border rounded-full text-white cursor-pointer'>Download Annual Report</button>
        </div>
      </div>
    </section>
  )
}

export default Legacy