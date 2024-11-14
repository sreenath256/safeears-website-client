import React from 'react';
import { IoIosStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";

import transparentright from '../assets/new/wel.png'
import transparentleft from '../assets/new/wer.png'
import blackright from '../assets/new/brel.png'
import blackleft from '../assets/new/brer.png'
import grayright from '../assets/new/bel.png'
import grayleft from '../assets/new/ber.png'
import beigeright from '../assets/new/crel.png'
import beigeleft from '../assets/new/crer.png'

import transparentpair from '../assets/new/wepair.png'
import blackpair from '../assets/new/blepair.png'
import graypair from '../assets/new/brepair.png'
import beigepair from '../assets/new/crepair.png'


const allProducts = [
    {
        title:`transparent - left`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:transparentleft
    },
    {
        title:`transparent - right`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:transparentright
    },
    {
        title:`gray - left`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:grayleft
    },
    {
        title:`gray - right`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:grayright
    },
    {
        title:`black - left`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:blackleft
    },
    {
        title:`black - right`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:blackright
    },
    {
        title:`beige - left`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:beigeleft
    },
    {
        title:`beige - right`,
        offprice:`699`,
        ogprice:`999`,
        offer:`30`,
        stock:`in stock`,
        image:beigeright
    },
    {
        title:`transparent - dual pack`,
        offprice:`999`,
        ogprice:`1999`,
        offer:`50`,
        stock:`in stock`,
        image:transparentpair
    },
    {
        title:`gray - dual pack`,
        offprice:`999`,
        ogprice:`1999`,
        offer:`50`,
        stock:`in stock`,
        image:graypair
    },
    {
        title:`black - dual pack`,
        offprice:`999`,
        ogprice:`1999`,
        offer:`50`,
        stock:`in stock`,
        image:blackpair
    },
    {
        title:`beige - dual pack`,
        offprice:`999`,
        ogprice:`1999`,
        offer:`50`,
        stock:`in stock`,
        image:beigepair
    },
]

const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5 md:gap-10 xl:gap-5 text-black'>
        {allProducts?.map((dt,i)=>(
        <div className='bg-white w-full h-full px-5 py-2 rounded-2xl flex justify-center items-center gap-10 md:gap-5 xl:gap-3' key={i}>
             <div className='overflow-hidden h-28 w-28 relative rounded-2xl'>
                <img className='w-full h-full object-cover rounded-2xl hover:opacity-90 duration-300' src={dt?.image} alt="" />
                <span className='absolute text-[9px] w-full py-1 text-center capitalize font-semibold bottom-0 right-0 bg-main text-black'>keep your ears dry</span>
             </div>
             <div className='flex flex-col gap-1'>
                <p className='text-[9px] font-medium flex gap-1 capitalize items-center'><IoIosStar className='text-main text-base'/>Be first to review</p>
                <h1 className='text-xs font-semibold capitalize'>{dt?.title}</h1>
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