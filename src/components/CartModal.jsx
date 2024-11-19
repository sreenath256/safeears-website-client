// components/CartModal.js
import React, { useState } from "react";
import { IoIosCloseCircle, IoIosStar } from "react-icons/io";
import prod1 from "../assets/new/brer.png";
import { FaRupeeSign } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BsFillTrash3Fill } from "react-icons/bs";

const CartModal = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < 6) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-full xl:w-[400px] bg-white shadow-lg transition-transform duration-300 z-[99999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-black hover:text-red-500 duration-200 text-3xl md:text-2xl"
        >
          <IoIosCloseCircle />
        </button>

        {/* Modal Content */}
        <div className="py-20 p-5 text-black flex h-full flex-col justify-between gap-5 overflow-y-scroll">
          <div className="divide-x-2 flex justify-between flex-col gap-2">
            
            {/* products */}
            <div className="flex flex-row gap-3  items-center justify-center bg-gray-200  border p-3 rounded-2xl">
              <div className="overflow-hidden h-20 w-20 relative rounded-2xl">
                <img
                  className="w-full h-full object-cover rounded-2xl hover:opacity-90 duration-300"
                  src={prod1}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-sm font-semibold capitalize cursor-pointer">
                  Transparent Right
                </h1>
                <div className="flex  font-semibold gap-2 text-xs">
                  <p className="flex">
                    <FaRupeeSign /> 999
                  </p>
                  <div className="relative text-gray-400 flex">
                    <FaRupeeSign /> 1999
                    <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
                  </div>
                  <p className="text-[#69b886]">30 % off</p>
                </div>
                <div className="flex  items-center gap-5">
                  <div className="flex border border-black rounded-lg overflow-hidden text-sm">
                    <button
                      className={`w-6 grid place-items-center h-6 ${
                        quantity === 1
                          ? "bg-black text-white cursor-not-allowed"
                          : "bg-black hover:bg-white text-white hover:text-black cursor-pointer"
                      } duration-200`}
                      onClick={decrementQuantity}
                      disabled={quantity === 1}
                    >
                      <FiMinus />
                    </button>
                    <span className="w-6 grid place-items-center h-6">
                      {quantity}
                    </span>
                    <button
                      className={`w-6 grid place-items-center h-6 ${
                        quantity === 6
                          ? "bg-black text-white cursor-not-allowed"
                          : "bg-black hover:bg-white text-white hover:text-black cursor-pointer"
                      } duration-200`}
                      onClick={incrementQuantity}
                      disabled={quantity === 6}
                    >
                      <GoPlus />
                    </button>
                  </div>
                  <button>
                    <BsFillTrash3Fill className="text-xl text-black hover:text-red-500 duration-300" />
                  </button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-row gap-3  items-center justify-center bg-gray-200  border p-3 rounded-2xl">
              <div className="overflow-hidden h-20 w-20 relative rounded-2xl">
                <img
                  className="w-full h-full object-cover rounded-2xl hover:opacity-90 duration-300"
                  src={prod1}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-sm font-semibold capitalize cursor-pointer">
                  Transparent Right
                </h1>
                <div className="flex  font-semibold gap-2 text-xs">
                  <p className="flex">
                    <FaRupeeSign /> 999
                  </p>
                  <div className="relative text-gray-400 flex">
                    <FaRupeeSign /> 1999
                    <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
                  </div>
                  <p className="text-[#69b886]">30 % off</p>
                </div>
                <div className="flex  items-center gap-5">
                  <div className="flex border border-black rounded-lg overflow-hidden text-sm">
                    <button
                      className={`w-6 grid place-items-center h-6 ${
                        quantity === 1
                          ? "bg-black text-white cursor-not-allowed"
                          : "bg-black hover:bg-white text-white hover:text-black cursor-pointer"
                      } duration-200`}
                      onClick={decrementQuantity}
                      disabled={quantity === 1}
                    >
                      <FiMinus />
                    </button>
                    <span className="w-6 grid place-items-center h-6">
                      {quantity}
                    </span>
                    <button
                      className={`w-6 grid place-items-center h-6 ${
                        quantity === 6
                          ? "bg-black text-white cursor-not-allowed"
                          : "bg-black hover:bg-white text-white hover:text-black cursor-pointer"
                      } duration-200`}
                      onClick={incrementQuantity}
                      disabled={quantity === 6}
                    >
                      <GoPlus />
                    </button>
                  </div>
                  <button>
                    <BsFillTrash3Fill className="text-xl text-black hover:text-red-500 duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        <button className="bg-main hover:bg-yellow-600 duration-300 w-full text-black text-xl font-semibold py-2 rounded-xl">Place Orders</button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default CartModal;
