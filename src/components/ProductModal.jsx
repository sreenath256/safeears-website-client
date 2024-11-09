import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const maxLimit = 10;



  const increaseQuantity = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, maxLimit));
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  if (!isOpen) return null;

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-gray-800 opacity-75"
            onClick={handleBackgroundClick}
          ></div>
          <div className="bg-white p-5 xl:p-10 rounded-3xl text-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[85%] xl:w-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 xl:gap-x-20">
             
        
                {/* ====== */}
                  <div>
                  <Swiper
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={true}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay,Pagination]}>
                          <SwiperSlide>
                             <img src={product.prodimage} className="h-72 w-56 xl:h-[400px] xl:w-[300px]" />
                          </SwiperSlide>
                          <SwiperSlide>
                             <img src={product.prodimage2} className="h-72 w-56 xl:h-[400px] xl:w-[300px]" />
                          </SwiperSlide>
                      </Swiper>
                  </div>
                {/* ====== */}
             
              <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-2xl font-semibold">{product.name}</h1>
                <div className="flex items-center space-x-3 text-black">
                  <button
                    onClick={decreaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300  w-6 h-6 "
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="bg-gray-200 hover:bg-gray-300  w-6 h-6 "
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-2 items-center">
                  <h3 className="text-sm font-medium">Choose Color</h3>
                  <select
                    className="outline-none capitalize border border-gray-500"
                  >
                    <option value="black">black</option>
                    <option value="white">white</option>
                  </select>
                </div>
                <h4 className="text-base font-semibold">
                  Price : {product.price} ₹
                </h4>
                <button className="bg-main text-white py-3 w-full capitalize rounded-xl">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailModal;

{
  /* <button
className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
onClick={onClose}
>
Close
</button> */
}
