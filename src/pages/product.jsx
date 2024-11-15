import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { allProducts } from "../components/data";
import { IoIosStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 
  const { title } = useParams();
  const product = allProducts.find((item) => item.title === title);

  if (!product) {
    return <p>Product not found</p>;
  }

  const incrementQuantity = () => {
    if (quantity < 6) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleBackClick = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="grid place-items-center w-full py-10 p-5 gap-y-20">
      <div className="bg-white relative text-black w-full md:w-fit p-5 py-10 xl:p-16 rounded-[2rem] flex flex-col md:flex-row gap-10 md:gap-8 items-center">
        <button onClick={handleBackClick} className="absolute bg-gray-200 hover:bg-gray-300 duration-300 h-8 grid place-items-center rounded-full w-8 left-5 top-5"><MdOutlineKeyboardBackspace/></button>
        <div className="overflow-hidden h-full w-full md:h-48 md:w-48 relative rounded-2xl">
          <img
            className="w-full h-full object-cover rounded-2xl hover:opacity-90 duration-300"
            src={product?.image}
            alt=""
            loading="lazy"
          />
          <span className="absolute text-base md:text-xs w-full py-2 xl:py-1 text-center capitalize font-semibold bottom-0 right-0 bg-main text-black">
            keep your ears dry
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-1">
          <p className="text-xs font-medium flex gap-1 capitalize items-center">
            <IoIosStar className="text-main text-base" />
            Be first to review
          </p>
          <h1 className="text-lg font-semibold capitalize cursor-pointer">
            {product?.title}
          </h1>
          <div className="flex  font-bold gap-2 text-base">
            <p className="flex">
              <FaRupeeSign /> {product?.offprice}
            </p>
            <div className="relative text-gray-400 flex">
              <FaRupeeSign /> {product?.ogprice}
              <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
            </div>
            <p className="text-[#69b886]">{product?.offer}% off</p>
          </div>
          <div className="text-center text-sm font-bold text-[#69b886] capitalize">
            <p className="text-xs">{product?.stock}</p>
            <div className="h-[2px] w-full bg-gray-300 mb-1" />
            <p className="text-[#69b886] uppercase">regular size</p>
          </div>
          <button className="text-xs text-white bg-black hover:bg-main duration-200 w-full py-2 rounded-lg capitalize font-medium">
            add to cart
          </button>
        </div>
        <div className="flex flex-col items-center gap-7">
           <div className="flex border rounded-lg overflow-hidden">
            <button
              className={`w-7 grid place-items-center h-7 ${
                quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              } duration-200`}
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              <FiMinus />
            </button>
            <span className="w-7 grid place-items-center h-7">{quantity}</span>
            <button
              className={`w-7 grid place-items-center h-7 ${
                quantity === 6 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
              } duration-200`}
              onClick={incrementQuantity}
              disabled={quantity === 6}
            >
              <GoPlus />
            </button>
          </div>
          <button className="text-base text-black bg-main hover:bg-yellow-600 duration-200 w-full px-5 py-2 rounded-xl capitalize font-semibold">
            place your order
          </button>
        </div>
      </div>

      {/* shopping */}
      <div>
        <Link to={'/shop'} className="bg-main text-black font-semibold text-lg hover:bg-yellow-600 duration-300 px-10 w-fit py-2 rounded-2xl">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default ProductPage;
