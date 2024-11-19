import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {allProducts} from './data'



const Products = () => {
    const navigate = useNavigate('');
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 md:gap-10 xl:gap-5 text-black'>
        {allProducts?.map((dt,i)=>(
        <div className='bg-white w-full h-full px-5 py-2 rounded-2xl flex justify-center items-center gap-10 md:gap-5 xl:gap-3' key={i}>
             <div onClick={() => navigate(`/shop/${dt?.title}`)} className='cursor-pointer group overflow-hidden h-28 w-28 relative rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl group-hover:opacity-50 duration-300' src={dt?.image} alt="" loading='lazy' />
                <p className='hidden group-hover:block duration-500 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-black text-xl '><FaEye/></p>
                <span className='absolute text-[9px] w-full py-1 text-center capitalize font-semibold bottom-0 right-0 bg-main text-black'>keep your ears dry</span>
             </div>
             <div className='flex flex-col gap-1'>
                <p className='text-[9px] font-medium flex gap-1 capitalize items-center'><IoIosStar className='text-main text-base'/>Be first to review</p>
                <h1 className='text-xs font-semibold capitalize cursor-pointer' onClick={() => navigate(`/shop/${dt?.title}`)}>{dt?.title}</h1>
                <div className='flex  font-bold gap-2 text-xs'>
                    <p className='flex'><FaRupeeSign/> {dt?.offprice}</p>
                    <div className='relative text-gray-400 flex'><FaRupeeSign/> {dt?.ogprice}<span className='absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400'></span></div>
                    <p className='text-[#69b886]'>{dt?.offer}% off</p>
                </div>
                <div className='text-center text-xs font-bold text-[#69b886] capitalize'>
                        <p className='text-[10px]'>{dt?.stock}</p>
                        <div className='h-[2px] w-full bg-gray-300 mb-1'/>
                        <p className='text-[#69b886] uppercase'>regular size</p>
                </div>
                <button className='text-xs text-white bg-black hover:bg-main duration-200 w-full py-1 rounded-lg capitalize font-medium'>add to cart</button>
             </div>
         </div>
        ))}
    </div>
  )
}

export default Products