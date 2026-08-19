import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-900'>Win</span>
            <span className='text-slate-400'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-50 rounded-lg flex justify-around items-center'>
            <input type="text" placeholder='Search....' className='text-slate-500 focus:outline-none' />
            <FaSearch />
        </form>
        <ul className='flex flex-wrap gap-4'>
            <Link to='/'>
            <li className='hidden sm:inline hover:underline'>Home</li>
            </Link>
            <Link to='/sign-in'>
            <li className='hover:underline'>Sign In</li>
            </Link>
            <Link to='/sign-ip'>
            <li className='hidden sm:inline hover:underline'>Sign Up</li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>About</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header
