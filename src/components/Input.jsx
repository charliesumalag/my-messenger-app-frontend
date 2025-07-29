import React from 'react'

const Input = ({placeholder, type, name, handleChange}) => {
  return (
    <>
        <div className='flex flex-col gap-1'>
          <input name={name} type={type} placeholder={placeholder} className='w-full text-sm p-3 rounded-xl text-gray-700 outline-none border  border-gray-300' onChange={handleChange} />
        </div>
    </>
  )
}

export default Input
