import React from 'react'

const Input = ({placeholder, type}) => {
  return (
    <>
        <div className='flex flex-col gap-1'>
          <input type={type} placeholder={placeholder} className=' text-sm p-3 rounded-xl text-gray-700 outline-none border  border-gray-300' />
        </div>
    </>
  )
}

export default Input
