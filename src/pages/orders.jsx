import { useState } from "react";
import prod1 from '../assets/new/brel.png'
import { IoIosStar } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { BsFillTrash3Fill } from "react-icons/bs";


const PlaceOrderAccordion = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const goToNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

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
    <div className="w-[95%] md:w-[80%] xl:w-[50%] mx-auto p-3 xl:p-10 bg-white text-black md:rounded-xl xl:rounded-[2rem] shadow-lg flex flex-col gap-2 my-10">
      {/* Step 1 */}
      <div>
        <div
          className={`flex items-center justify-between p-3 ${
            isLoggedIn ? "bg-gray-400" : "bg-main"
          } text-white cursor-pointer`}
          onClick={() => !isLoggedIn && setActiveStep(1)}
        >
          <span className="flex items-center gap-2">
            <span
              className={`${
                isLoggedIn ? "bg-gray-300 text-gray-600" : "bg-white text-main"
              } font-bold w-10 h-10 flex items-center justify-center`}
            >
              1
            </span>
            <p>LOGIN OR SIGNUP</p>
          </span>
          <span>{activeStep === 1 ? "-" : "+"}</span>
        </div>
        {!isLoggedIn && activeStep === 1 && (
          <div className="p-4 border border-t-0 border-main flex flex-col items-center">
            <input
              type="text"
              placeholder="Enter Email/Mobile number"
              className="w-full p-2 border-b mb-4"
            />
            <button
              className="w-fit px-5 bg-main text-black font-semibold py-2 rounded-md"
              onClick={() => {
                setIsLoggedIn(true); // Simulate login
                goToNextStep();
              }}
            >
              Continue
            </button>
          </div>
        )}
        {isLoggedIn && activeStep === 1 && (
          <div className="p-4 border border-t-0 border-main text-center">
            <p>You are already logged in!</p>
            <button
              className="w-fit px-5 bg-main text-black font-semibold py-2 rounded-md"
              onClick={goToNextStep}
            >
              Proceed to Next Step
            </button>
          </div>
        )}
      </div>

      {/* Step 2 */}
      <div>
        <div
          className="flex items-center justify-between p-3 bg-main text-white cursor-pointer"
          onClick={() => setActiveStep(2)}
        >
          <span className="flex items-center gap-2">
            <span className="bg-white text-main font-bold w-10 h-10 flex items-center justify-center">
              2
            </span>
            <p>DELIVERY ADDRESS</p>
          </span>
          <span>{activeStep === 2 ? "-" : "+"}</span>
        </div>
        {activeStep === 2 && (
          <div className="p-4 border border-t-0 border-main flex flex-col items-center gap-5">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-3 w-full">
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Name"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="10-digit mobile number"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Pincode"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Locality"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Address (Area and Street)"/>
                <div className="flex gap-10">
                    <span className="flex items-center gap-2"><input type="radio" name="option"/><p>Home</p></span>
                    <span className="flex items-center gap-2"><input type="radio" name="option"/><p>Work</p></span>
                </div>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="City/District/Town"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="State"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Landmark (Optional)"/>
                <input className="border p-2 py-3 outline-none" type="text" placeholder="Alternate Phone (Optional)"/>
            
            </form>
            <button
              className="w-fit px-5 bg-main text-black font-semibold py-2 rounded-md"
              onClick={goToNextStep}
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Step 3 */}
      <div>
        <div
          className="flex items-center justify-between p-3 bg-main text-white cursor-pointer"
          onClick={() => setActiveStep(3)}
        >
          <span className="flex items-center gap-2">
            <span className="bg-white text-main font-bold w-10 h-10 flex items-center justify-center">
              3
            </span>
            <p>ORDER SUMMARY</p>
          </span>
          <span>{activeStep === 3 ? "-" : "+"}</span>
        </div>
        {activeStep === 3 && (
          <div className="p-4 border border-t-0 border-main flex flex-col items-center gap-5">
            <div className="divide-y-2 space-y-10">
                <div className="flex flex-col md:flex-row gap-5 items-center">
                    <div className="overflow-hidden h-full w-full md:h-48 md:w-48 relative rounded-2xl">
                        <img
                          className="w-full h-full object-cover rounded-2xl hover:opacity-90 duration-300"
                          src={prod1}
                          alt=""
                          loading="lazy"
                        />
                        <span className="absolute text-base md:text-xs w-full py-2 xl:py-1 text-center capitalize font-semibold bottom-0 right-0 bg-main text-black">
                          keep your ears dry
                        </span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:gap-1">
                          <p className="text-xs font-medium flex gap-1 capitalize items-center">
                            <IoIosStar className="text-main text-base" />
                            Be first to review
                          </p>
                          <h1 className="text-lg font-semibold capitalize cursor-pointer">
                            Transparent Right
                          </h1>
                          <div className="flex  font-bold gap-2 text-base">
                            <p className="flex">
                              <FaRupeeSign /> 999
                            </p>
                            <div className="relative text-gray-400 flex">
                              <FaRupeeSign /> 1999
                              <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
                            </div>
                            <p className="text-[#69b886]">30 % off</p>
                          </div>
                          <div className="text-center text-sm font-bold text-[#69b886] capitalize">
                            <p className="text-xs">in Stock</p>
                            <div className="h-[2px] w-full bg-gray-300 mb-1" />
                            <p className="text-[#69b886] uppercase">regular size</p>
                          </div>
                          <button className="text-xs text-white bg-black hover:bg-main duration-200 w-full py-2 rounded-lg capitalize font-medium">
                            add to cart
                          </button>
                        </div>

                        <div className="flex flex-col items-center gap-5" >
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
                            <button>
                              <BsFillTrash3Fill className="text-3xl hover:text-red-500 duration-300"  />
                            </button>
                        </div>
                </div>
                <div className="py-5 divide-y-2 divide-gray-100">
                  <h3 className="text-gray-500 text-xl pb-3 font-semibold">Price Details</h3>
                  <div className="flex justify-between items-center py-3 text-black">
                    <p className=" text-sm ">Price (1 item)</p>
                    <p className="flex items-center "><FaRupeeSign/>999</p>
                  </div>
                  <div className="flex justify-between items-center py-3 text-black">
                    <p className=" text-sm ">Delivery Charges</p>
                    <div className="flex gap-1">
                      <div className="relative  flex">
                                <FaRupeeSign /> 80
                                <span className="absolute top-[40%] left-0 rotate-12 h-[1.5px] w-full bg-red-400"></span>
                      </div>
                      <span className="text-green-500 font-bold">Free</span>
                    </div>
                  </div>
                  <div className="pt-5">
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-xl">Total Payable</p>
                        <p className="flex items-center "><FaRupeeSign/>999</p>
                      </div>
                      <p className="text-green-600 pt-2 font-semibold flex items-center">Your Total Saving on this order <FaRupeeSign/>999</p>
                  </div>
                </div>
            </div>
            <button
              className="w-fit px-5 bg-main text-black font-semibold py-2 rounded-md"
              onClick={goToNextStep}
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Step 4 */}
      <div>
        <div
          className="flex items-center justify-between p-3 bg-main text-white cursor-pointer"
          onClick={() => setActiveStep(4)}
        >
          <span className="flex items-center gap-2">
            <span className="bg-white text-main font-bold w-10 h-10 flex items-center justify-center">
              4
            </span>
            <p>PAYMENT OPTIONS</p>
          </span>
          <span>{activeStep === 4 ? "-" : "+"}</span>
        </div>
        {activeStep === 4 && (
          <div className="p-4 border border-t-0 border-main flex flex-col items-center gap-2">
            <p>Choose your payment method here.</p>
            <button
              className="w-fit px-10 bg-green-500 text-white font-semibold py-2 rounded-md"
              onClick={goToNextStep}
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrderAccordion;
