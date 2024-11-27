import React from 'react'

const OTP = () => {
  return (
     
<body className="bg-gradient-to-r from-[#007669] via-[#00726f] to-[#006b7c] flex items-center justify-center min-h-[80vh]">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">Verify Your OTP</h2>
        <p className="text-center text-gray-600 mb-4">Enter the 6-digit OTP sent to your email.</p>
        <form>
            <div className="flex space-x-2 justify-center mb-6">
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
                <input type="text" maxlength="1" className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main" />
            </div>
            <button type="submit" className="w-full bg-main text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200">Verify OTP</button>
        </form>
        <p className="text-center text-gray-600 mt-6">
            Didn’t receive the code? <a href="#" className="text-main hover:underline">Resend OTP</a>
        </p>
    </div>
</body>
 

  )
}

export default OTP