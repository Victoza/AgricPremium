import React from 'react'

const Legacy = () => {
  return (
    <section className='py-12 px-6 md:px-16'>
      <div className='container mx-auto bg-green-800 rounded-2xl flex flex-col space-y-8 p-8 md:p-16 items-center justify-center'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Join Our Growing Legacy</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint ab quos,
          officia magnam repellendus voluptatibus sed delectus!
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