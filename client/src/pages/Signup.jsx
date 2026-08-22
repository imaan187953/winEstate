import React from 'react'
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='bg-gray-300 p-3 rounded-lg focus:outline-none' id="username" />
        <input type="email" placeholder='email' className='bg-gray-300 p-3 rounded-lg focus:outline-none' id="email" />
        <input type="password" placeholder='password' className='bg-gray-300 p-3 rounded-lg focus:outline-none' id="password" />
        <button className=' text-white p-3 rounded-lg uppercase bg-slate-700 hover:opacity-95 disabled:80'>Sign Up</button>
      </form>
      <div className='mt-5 flex gap-2'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
        <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup
