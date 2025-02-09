import React from 'react';
import {earaids} from '../assets'

const AboutUs = () => {
  return (
    <section className='w-11/12 xl:w-10/12 mx-auto h-full xl:h-[80vh] py-10 md:py-0'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 h-full'>
            <div className='xl:col-span-2 flex justify-end items-end'>
                <img className='aspect-square object-contain' src={earaids} loading='lazy' alt="safeears" />
            </div>
            <div className='xl:col-span-3 flex items-center '>
                <p className='text-lg'>Safe Ears is a simple and a user friendly protective shield which can be placed around your ear while bathing , The safe ears is designed in such a way that water does not sweep inside your ears , thus safe guarding your ears from infection, pain, any kind of discharges, ear wax issues etc, and also can be used during pre and post surgery purposes to keep your ears dry and clean.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs