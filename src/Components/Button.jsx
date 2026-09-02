import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-transparent text-white border-2 border-white hover:bg-green-700 hover:text-white hover:border-0 rounded-3xl px-4 py-4'>
        {children}
    </button>
  )
}

export default Button