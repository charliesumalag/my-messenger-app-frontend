import React from 'react'
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  return (
    <div className='flex flex-col justify-between w-screen h-screen p-6'>
      <h1 className='text-center'>Englis US</h1>

      <div className='flex justify-center'>
        <i className="fa-brands fa-facebook-messenger text-blue-600 text-6xl"></i>
      </div>

      <form className='flex flex-col gap-4'>
        <Input type='email' placeholder='Mobile number or email' />
        <Input type='password' placeholder='Password' />
        <div>
          <Button text='Register' bgColor='blue' type='submit' />
        </div>
      </form>

      <div className='flex flex-col justify-center'>
        <button className=''>Log in account</button>
        <div className=' flex justify-center items-center gap-2'>
          <i className="fa-brands fa-meta"></i>
          <p>Meta</p>
        </div>
      </div>
    </div>
  )
}

export default Register
