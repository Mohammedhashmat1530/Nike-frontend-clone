import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 font-montserrat text-lg leading-none border rounded-full bg-coral-red'>
        {label}

        <img src={iconURL} alt='img' className='rounded-full ml-2 bg-white w-5 h-5'></img>

    </button>
  )
}

export default Button
