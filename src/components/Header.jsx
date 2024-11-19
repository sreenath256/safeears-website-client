import React, { useEffect, useRef, useState } from 'react';
import {logo} from '../assets';
import { Link, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";

import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import CartModal from './Cartmodal';

const menuItems=[
  {title:`home`,url:`/`},
  {title:`shop now`,url:`/shop`},
  {title:`about us`,url:`/about-us`},
  {title:`videos`,url:`/our-videos`},
  {title:`contact`,url:`/contact-us`},
]

const Header = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  open || isCartOpen
  ? (document.body.style.overflow = "hidden")
  : (document.body.style.overflow = "unset");

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.1,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <nav className='w-11/12  py-5 mx-auto flex items-center justify-between z-[9999]'>
        <Link to={'/'}><img className='h-20 w-28 xl:w-48 object-contain ' src={logo} alt="safeears" /></Link>
        {/* large screen menu */}
      <div className='flex md:flex-col xl:flex-row gap-y-3 gap-x-20'>
        <ul className='hidden lg:flex items-center gap-5'>
            {menuItems?.map((menu,i)=>(
              <>
                <li className={`text-sm uppercase transition-all duration-200 text-white ${currentPathname === menu.url ? 'border-b-0 border-white font-semibold text-xl' : 'border-b-0 border-transparent font-medium' }`} key={i}><Link to={menu.url}>{menu.title}</Link></li>
                {/* {i < menuItems.length - 1 && <span className="text-gray-300">•</span>} */}
              </>
            ))}
          </ul>
          <div className='hidden lg:flex gap-5 items-center text-base font-bold uppercase text-white'>
            <Link>Login / Sign Up</Link>
            <Link>track your order</Link>
            <Link className='ml-40 xl:ml-10 relative'>
              <span className='bg-black text-white h-5 w-5 absolute -top-4 rounded-full grid place-items-center left-2 text-xs'>3</span>
              <BsCart4 onClick={toggleCart} className='text-3xl'/>
            </Link>
          </div>
      </div>
        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
            ref={menuRef} 
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed lg:hidden left-0 top-0 w-full h-fit pt-20 rounded-b-[2rem] origin-top bg-white text-main p-10 z-[9999]"
            >
              <motion.div
               initial={{ opacity: 0, rotate:90 }}
               animate={{ opacity: 1, rotate:0 }}
               exit={{ opacity: 0, rotate:90 }}
               transition={{ duration: 0.3 }}
              className='absolute right-4 top-6'
              >
                <MdClose
                  onClick={toggleMenu}
                  className="text-3xl cursor-pointer"
                />
              </motion.div>
              <motion.div
                    className="w-24 absolute top-5 left-5"
                    initial={{ opacity: 0, translateY: 40 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    exit={{ opacity: 0, translateY: -40 }}
                    transition={{ duration: 0.3 }}
              >
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -40 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-center  items-center gap-3 md:gap-4 "
              >
               <div className='overflow-hidden flex flex-col gap-5 text-center font-semibold capitalize text-xl'>
               {menuItems?.map((menu,i)=>(
                 <Link onClick={()=> setOpen(false)} className="hover:underline" to={menu.url}>{menu.title}</Link>
               ))}
               <div className='flex flex-col gap-5 items-center'>
                <Link>Login / Sign Up</Link>
                <Link>track your order</Link>
                <Link className='mt-5 relative'>
                  <span className='bg-black text-white h-5 w-5 absolute -top-4 rounded-full grid place-items-center left-2 text-xs'>3</span>
                  <BsCart4 onClick={toggleCart} className='text-3xl'/>
                </Link>
               </div>
               </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

       <div className='flex gap-8 items-center'>
            {/* <div className='relative'>
            <span className='absolute -top-3 -right-3 bg-red-500 text-white w-5 h-5 text-xs rounded-full grid place-items-center'>2</span>
            <Link className='text-2xl hover:text-main' onClick={toggleCartModal}><FaCartShopping/></Link>
          </div> */}
          <HiOutlineMenuAlt1 onClick={toggleMenu} className='text-4xl block lg:hidden cursor-pointer'/>
       </div>

        {/*  */}
        <CartModal isOpen={isCartOpen} onClose={toggleCart} />
    </nav>
  )
}

export default Header