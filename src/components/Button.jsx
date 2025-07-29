import React from 'react'

const Button = ({type, text, bgColor}) => {
    const buttonClass = `mt-2 w-full bg-${bgColor}-600 hover:bg-${bgColor}-700 text-white py-2 px-2 font-extralight rounded-3xl cursor-pointer`;

  return (
    <>
        <button type={type} className={buttonClass}>{text}</button>
    </>
  )
}

export default Button
