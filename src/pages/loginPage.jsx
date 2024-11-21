import React, { useState } from 'react';
import { logo } from '../assets';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Always initialize, even if not used in login form.

  return (
    <section className="w-11/12 xl:w-10/12 mx-auto h-screen flex flex-col justify-center items-center py-10">
      <div className="bg-white text-black text-center w-[95%] xl:w-[380px] shadow-2xl rounded-2xl pb-5">
        <div className="bg-black p-3 grid place-items-center rounded-2xl -mt-5 w-[90%] mx-auto shadow-xl">
          <Link to='/'><img className="h-20 object-cover" src={logo} alt="Logo" /></Link>
        </div>
        {isLogin ? (
          <form className="pt-10 p-5 flex flex-col gap-5">
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
        ) : (
          <form className="pt-10 p-5 flex flex-col gap-5">
            <div>
              <input
                className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                type="text"
                placeholder="User Name"
              />
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
            <div className="relative">
              <input
                className="border-2 w-full p-2 rounded-md outline-none placeholder:text-sm"
                type={confirmPasswordVisible ? 'text' : 'password'}
                placeholder="Re-Type Password"
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-500"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? '🙈' : '👁️'}
              </button>
            </div>
            <button className="bg-main p-2 rounded-md text-black uppercase font-semibold mt-7">
              Sign Up
            </button>
          </form>
        )}
        <span className="text-xs">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="font-semibold text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="font-semibold text-blue-500 hover:underline"
              >
                Log In
              </button>
            </>
          )}
        </span>
      </div>
    </section>
  );
};

export default Auth;
