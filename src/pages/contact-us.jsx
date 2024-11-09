import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import {earaids} from '../assets'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <section className='w-11/12 xl:w-10/12 mx-auto py-10 h-full grid grid-cols-1 md:grid-cols-2 gap-y-10'>
      <div className='flex flex-col justify-center gap-5'>
        <div className='flex items-start gap-5'>
          <IoLocationOutline className='text-3xl'/>
          <p className='text-xl font-medium'>GRAND VF PVT.LTD<br/>
            Five Star Arcade<br/>
            Near DISTRICT HOSPITAL<br/>
            KANNUR -670017<br/>
            Kerala, India</p>
        </div>
        <div className='flex items-start gap-5'>
          <FiPhone className='text-3xl'/>
          <div className='flex flex-col font-medium text-xl'>
            <a className='hover:underline' href="tel:9207166699">9207 166699</a>
            <a className='hover:underline' href="tel:9207066699">9207 066699</a>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center items-center'>
        <img className='h-[300px] xl:h-[400px] object-cover' src={earaids} alt="" />
      </div>
    </section>
  )
}

export default ContactUs