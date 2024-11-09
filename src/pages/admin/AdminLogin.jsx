import React from 'react';
import {logo} from '../../assets'

const AdminLogin = () => {
  return (
    <section className='h-screen w-full flex justify-center items-center bg-gray-900'>
        <form className='bg-black flex flex-col gap-4 text-white p-10 rounded-sm w-[90%] xl:w-1/4'>
          <img className='h-32' src={logo} alt="" />
          <input className='p-2 border border-gray-500 rounded-sm focus:outline-1 focus:outline-green-300' type="text" name="" id="" placeholder='Email'/>
          <input className='p-2 border border-gray-500 rounded-sm focus:outline-1 focus:outline-green-300' type="password" name="" id="" placeholder='Password'/>
          <button className='bg-main h-10 rounded-sm hover:bg-yellow-600'>Login</button>
        </form>
    </section>
  )
}

export default AdminLogin