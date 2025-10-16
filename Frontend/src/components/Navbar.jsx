import React from 'react'
import { Link } from 'react-router'
import {HomeIcon, PlusIcon, LogIn ,User } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-blue-600 text-white p-4'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Notes App</h1>
                <div className='space-x-4'>
                    <Link to="/Create" className='btn btn-primary'>
                        <PlusIcon className='size-5' />
                        Create
                    </Link>
                    <Link to="/" className='btn btn-secondary'>
                        <HomeIcon className='size-5' />
                        Home
                    </Link>
                    <Link to="/login" className='btn btn-secondary'>
                        <LogIn className='size-5' />
                        Login
                    </Link>
                    <Link to="/register" className='btn btn-secondary'>
                        <User className='size-5' />
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
