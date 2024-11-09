import React, { useState } from 'react';
import {earandface,earaids,safewht,safeamz,safeflp} from '../assets'
import { Link } from 'react-router-dom';


const HomePage = () => {


  return (
    <div className='w-11/12  mx-auto'>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden py-10 md:py-0'>
        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-2 text-center'>
              <h1 className=' font-semibold'>Unit of GRAND VF PVT. LTD.</h1>
              <div className='flex flex-col gap-3 text-center  border-2 rounded-3xl w-full p-3'>
                  {/* <h3 className='text-3xl uppercase font-semibold'>shop now</h3> */}
                  <a href='https://wa.me/919207066699' target='_blank'><img className='h-16 object-contain rounded-2xl py-1 bg-white w-full' src={safewht} alt="" /></a>
                  <a href='https://amzn.in/d/bEjLF1S' target='_blank'><img className='h-16 object-contain rounded-2xl py-1 bg-white w-full' src={safeamz} alt="" /></a>
                  {/* <Link to={'/under-construction'}><img className='h-20 object-contain rounded-2xl py-1 bg-white w-full' src={safeflp} alt="" /></Link> */}
              </div>
          </div>
          <div className='col-span-3 text-center'>
            <h1 className='text-6xl font-medium pb-2'>SAFE EARS</h1>
            <p className='text-base text-justify '>Safe Ears is a simple and a user friendly
              protective shield which can be placed around
              your ear while bathing , The safe ears is designed
              in such a way that water does not sweep inside
              your ears , thus safe guarding your ears from
              infection, pain, any kind of discharges, ear wax
              issues etc, and also can be used during pre and
              post surgery purposes to keep your ears dry and
              clean.</p>
          </div>
        </div>
        <div className=''>
           carousal
        </div>
    </section>
    </div>
  )
}

export default HomePage

// https://wa.me/+971569251238