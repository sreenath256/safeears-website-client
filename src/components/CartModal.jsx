import React from 'react';
import { IoIosClose } from "react-icons/io";
import { ear2, ear1, ear3 } from "../assets";
import { useNavigate } from 'react-router-dom';


const CartModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }


  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-75 flex justify-center items-center z-50" onClick={handleBackgroundClick}> 
          {/* Modal */}
          <div className="bg-white text-black rounded-lg p-8 max-w-sm w-full mx-4 relative " >
            <div className="flex justify-end">
              <IoIosClose className='text-3xl absolute top-3 right-3 hover:text-red-500 duration-200 cursor-pointer'  onClick={onClose}/>
              
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">Your Cart</h2>
              {/* Add your cart items or any content here */}
              <div className='py-3  flex flex-col gap-3 max-h-60 pr-5 overflow-y-scroll cart-scroll'>
                    <div className='flex gap-5 items-center justify-between border-b-2 pb-3'>
                      <img className='w-20 h-24 bg-gray-300 rounded-md p-1 object-cover' src={ear1} alt="prod" />
                      <span className='text-sm font-semibold'>
                        <h1 >SE-Black RIGHT</h1>
                        <span>1 x ₹ 1299</span>
                      </span>
                      <IoIosClose className='text-2xl hover:text-red-500 duration-200 cursor-pointer'/>
                    </div>
                    <div className='flex gap-5 items-center justify-between'>
                      <img className='w-20 h-24 bg-gray-300 rounded-md p-1 object-cover' src={ear1} alt="prod" />
                      <span className='text-sm font-semibold'>
                        <h1 >SE-Black RIGHT</h1>
                        <span>1 x ₹ 1299</span>
                      </span>
                      <IoIosClose className='text-2xl hover:text-red-500 duration-200 cursor-pointer'/>
                    </div>
                    <div className='flex gap-5 items-center justify-between'>
                      <img className='w-20 h-24 bg-gray-300 rounded-md p-1 object-cover' src={ear1} alt="prod" />
                      <span className='text-sm font-semibold'>
                        <h1 >SE-Black RIGHT</h1>
                        <span>1 x ₹ 1299</span>
                      </span>
                      <IoIosClose className='text-2xl hover:text-red-500 duration-200 cursor-pointer'/>
                    </div>
                    <div className='flex gap-5 items-center justify-between'>
                      <img className='w-20 h-24 bg-gray-300 rounded-md p-1 object-cover' src={ear1} alt="prod" />
                      <span className='text-sm font-semibold'>
                        <h1 >SE-Black RIGHT</h1>
                        <span>1 x ₹ 1299</span>
                      </span>
                      <IoIosClose className='text-2xl hover:text-red-500 duration-200 cursor-pointer'/>
                    </div>
              </div>
              <hr className='my-2'/>
              <h3 className='text-xl font-semibold'>SUBTOTAL : ₹2999</h3>
            </div>
            <button onClick={() => navigate('/checkout')} className='bg-main text-white py-3 w-full rounded-xl text-base capitalize mt-2'>check out</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
