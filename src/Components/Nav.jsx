import React from 'react'
import {Link } from 'react-router-dom'
import  { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Nav = () => {
    const {cart =[]} =useContext(CartContext);
  return (
    <>
    <nav className='bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md'>
        <Link to='/'className='text-xl font-bold text-blue-400'>Shophub</Link>
        <div className='flex items-center gap-6'>
        <Link to='/' className='hover:text-blue-400 transition'>Home</Link>
        <Link to='/cart' className='relative hover:text-blue-400 transition'>Cart {cart.length > 0 &&(
            <span className='absolute -top-2 -right-3 bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full '>{cart.length}</span>
        )}</Link>
        </div>
    </nav>
    </>
  )
  
}

export default Nav