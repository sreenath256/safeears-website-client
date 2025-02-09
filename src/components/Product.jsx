import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cloudinary } from "../utils/cloudinaryBaseUrl";
import { FaEye, FaRupeeSign } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { toast } from "react-toastify";
import { URL } from "../Common/api";
import { config } from "../Common/configurations";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCart } from "../redux/actions/user/cartActions";
import { toggleCart } from "../redux/reducers/userSlice";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartLoading, setCartLoading] = useState(false);

  const { cart, loading } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const addToCart = async (id) => {
    setCartLoading(true);
    if (!user) {
      return navigate("/login");
    }
    await axios
      .post(
        `${URL}/user/cart`,
        {
          product: id,
          quantity: 1,
        },
        { ...config, withCredentials: true }
      )
      .then((data) => {
        toast.success("Added to cart");
        setCartLoading(false);
        dispatch(getCart());
      })
      .catch((error) => {
        const err = error.response.data.error;
        toast.error(err);
        setCartLoading(false);
      });
  };

  const goToCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="bg-white w-full h-full px-5 py-2 rounded-2xl flex justify-center items-center gap-10 md:gap-5 xl:gap-3">
      <div
        onClick={() => navigate(`/shop/${item._id}`)}
        className="cursor-pointer group overflow-hidden h-28 w-28 relative rounded-2xl"
      >
        <img
          className="w-full h-full object-cover rounded-2xl group-hover:opacity-50 duration-300"
          src={`${cloudinary}/${item.imageURL}`}
          alt={item.name}
          loading="lazy"
        />
        <p className="hidden group-hover:block duration-500 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-black text-xl ">
          <FaEye />
        </p>
        <span className="absolute text-[9px] w-full py-1 text-center capitalize font-semibold bottom-0 right-0 bg-main text-black">
          keep your ears dry
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[9px] font-medium flex gap-1 capitalize items-center">
          <IoIosStar className="text-main text-base" />
          Be first to review
        </p>
        <h1
          className="text-xs font-semibold capitalize cursor-pointer"
          onClick={() => navigate(`/shop/${item?._id}`)}
        >
          {item?.name}
        </h1>
        <div className="flex  font-bold gap-2 text-xs">
          <p className="flex">
            <FaRupeeSign /> {item?.salePrice}
          </p>
          <div className="relative text-gray-400 flex">
            <FaRupeeSign /> {item?.mrpPrice}
            <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
          </div>
          <p className="text-[#69b886]">
            {Math.round(
              ((item.mrpPrice - item.salePrice) / item.mrpPrice) * 100
            )}
            % off
          </p>
        </div>
        <div className="text-center text-xs font-bold text-[#69b886] capitalize">
          <p className="text-[10px]">{item?.status}</p>
          <div className="h-[2px] w-full bg-gray-300 mb-1" />
          <p className="text-[#69b886] uppercase">regular size</p>
        </div>
        {cartLoading ? (
          <button
            disabled={cartLoading}
            className="text-xs text-white bg-black hover:bg-main duration-200 w-full py-1 rounded-lg capitalize font-medium"
          >
            Adding to cart
          </button>
        ) : cart?.length !== 0 &&
          cart?.some((cartItem) => cartItem.product._id === item._id) ? (
          <button
            onClick={() => goToCart()}
            className="text-xs text-white bg-black hover:bg-main duration-200 w-full py-1 rounded-lg capitalize font-medium"
          >
            Go to cart
          </button>
        ) : (
          <button
            onClick={() => addToCart(item._id)}
            className="text-xs text-white bg-black hover:bg-main duration-200 w-full py-1 rounded-lg capitalize font-medium"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
