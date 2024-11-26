import React, { useState } from 'react';
import {logo} from '../../assets'
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  return (
    <section className='h-screen w-full flex justify-center items-center '>
       <form className="pt-10 p-5 flex flex-col gap-5 bg-white text-black w-[95%] xl:w-[380px] shadow-2xl rounded-2xl pb-5">
            <div className="bg-black p-3 grid place-items-center rounded-2xl -mt-16 w-[90%] mx-auto shadow-xl">
               <img className="h-20 object-cover" src={logo} alt="Logo" />
              </div>
            <div>
              <input
                className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <input
                className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? '🙈' : '👁️'}
              </button>
            </div>
            <button className="bg-main p-2 rounded-md text-black uppercase font-semibold mt-7">
              Login
            </button>
          </form>
    </section>
  )
}

export default AdminLogin