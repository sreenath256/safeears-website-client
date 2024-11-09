import React from 'react';
import {earaids} from '../assets'

const AboutUs = () => {
  return (
    <section className='w-11/12 xl:w-10/12 mx-auto h-full py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:pt-20'>
            <div className='xl:col-span-2 grid place-items-center'>
                <img className='h-[300px] w-[300px] xl:h-[400px] xl:w-[400px] object-cover' src={earaids} loading='lazy' alt="safeears" />
            </div>
            <div className='xl:col-span-3 flex items-center '>
                <p className='text-lg'>SAFE EARS is an innovation which discloses a ear-protection aid after 8years of R&D. It is an auricular shaped product which is used to cover the external ear to prevent water or foreign particles from entering the ear canal. SAFE EARS is made of food-grade plastic material like Polypropylene. Safe Ears is a Patent Applied Product. Safe Ears is a ventured by Grand VF PVT.Ltd</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs