import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col justify-between w-screen h-screen p-6'>
      <h1 className='text-center'>Englis US</h1>
      <div className='flex justify-center'>
        <i className="fa-brands fa-facebook-messenger text-blue-600 text-6xl"></i>
      </div>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <input type="email" placeholder='Mobile number or email' className='py-2.5 px-2.5 rounded-xl  outline-none border  border-gray-300' />
        </div>
        <div className='flex flex-col gap-1'>
         <input type="password" placeholder='Password' className='py-2.5 px-2.5 rounded-xl  outline-none border  border-gray-300' />
        </div>
        <div>
          <button type='submit' className='mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 font-extralight rounded-3xl cursor-pointer '>Log in</button>
        </div>
      </form>
      <div className='flex flex-col justify-center'>
        <button>Create new account</button>
        <div className='flex justify-center items-center gap-2'>
          <i className="fa-brands fa-meta"></i>
          <p>Meta</p>
        </div>
      </div>
    </div>
  )
}

export default Login
