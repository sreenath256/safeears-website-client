import { useState } from "react";

const PlaceOrderAccordion = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const goToNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <div className="w-[50%] mx-auto p-10 bg-white text-black rounded-[2rem] shadow-lg flex flex-col gap-2 my-10">
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
            <form className="grid grid-cols-2 gap-3 w-full">
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
            <div>
            
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
              className="w-fit px-5 bg-main text-black font-semibold py-2 rounded-md"
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
