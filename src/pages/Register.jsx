import React, { useState } from 'react'
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        username : '',
        password : '',
        c_passwrod : '',
    });
    console.log(formData);
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name] : value,
        }))
    }


  return (
    <div className='flex flex-col justify-between w-screen h-screen p-4'>
      <div className='flex justify-center'>
        <i className="fa-brands fa-facebook-messenger text-blue-600 text-6xl"></i>
      </div>

      <form className='flex flex-col gap-4'>
        <div className='flex gap-2 w-full'>
            <Input type='text' placeholder='First name' name='firstName' handleChange={handleChange} />
            <Input type='text' placeholder='Last name' name='lastName'  handleChange={handleChange} />
        </div>
        <Input type='email' placeholder='Mobile number or email' name='username'  handleChange={handleChange} />
        <Input type='password' placeholder='Password' name='password' handleChange={handleChange} />
        <Input type='password' placeholder='Confirm Password' name='c_passwrod' handleChange={handleChange} />
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
