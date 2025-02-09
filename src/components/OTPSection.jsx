import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL } from "../Common/api";
import { config } from "../Common/configurations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OTPSection = ({email, setPasswordSec, setOTPSec, setOTPExpired}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);

  const [resendSeconds, setResendSeconds] = useState(30);
  const [resendLoading, setResendLoading] = useState(false);
  // Saving OTP to otp variable on change
  const handleChange = (e, index) => {
    const updatedOtp = [...otp];
    const value = e.target.value;

    if (value === "") {
      // If backspace is pressed, remove the number and move back to the previous box
      updatedOtp[index] = "";
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    } else if (!isNaN(value) && value.length <= 1) {
      // Check if the input is a number
      updatedOtp[index] = value;

      if (index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }

    setOtp(updatedOtp);
  };

  // Copy pasting otp
  // Handle paste event
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text/plain");

    // Distribute the pasted content across input boxes
    for (let i = 0; i < otp.length; i++) {
      if (pastedData[i] && !isNaN(pastedData[i])) {
        document.getElementById(`otp-input-${i}`).value = pastedData[i];
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[i] = pastedData[i];
          return newOtp;
        });
      }
    }

    // Set focus on the last input box
    document.getElementById(`otp-input-${otp.length - 1}`).focus();

    e.preventDefault();
  };

  // OTP Submission function
  const handleOTPSubmit = async (e) => {
    e.preventDefault();

    let otpNumber = parseInt(otp.join(""));
    console.log(email);

    if (otpNumber.toString().split("").length < 6) {
      setError("OTP is not valid");
      return;
    } else {
      setError("");
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${URL}/auth/forget-password-validate-otp`,
        {
          email: email,
          otp: otpNumber,
        },
        config
      );
      if (response.status) {
        console.log(response);

        setOTPSec(false);
        setLoading(false);
        setPasswordSec(true);
      }
    } catch (err) {
      console.log(err);

      setError(err.response.data.error);
      setLoading(false);
    }
  };

  // OTP 5 Minute Timer function
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          toast.error("OTP Expired");
          setOTPExpired(true);
          setOTPSec(false);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // OTP Resend timer starting on component load
  useEffect(() => {
    const resendTimerInterval = setInterval(() => {
      if (resendSeconds > 0) {
        setResendSeconds(resendSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(resendTimerInterval);
    };
  }, [resendSeconds]);

  const handleResending = async () => {
    if (resendSeconds === 0) {
      setResendLoading(true);

      try {
        const response = await axios.post(
          `${URL}/auth/resend-otp`,
          {
            email: email.email,
          },
          config
        );

        if (response.status) {
          if (response.data.success) {
            toast.success(response.data.message);
            setResendLoading(false);
          }
        }
      } catch (err) {
        setError(err.response.data.error);
        toast.error(err.response.data.error);
        setResendLoading(false);
      }

      setResendSeconds(30);
    } else {
      toast.error(`Please wait ${resendSeconds} seconds before resending OTP`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
        Verify Your OTP
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Enter the 6-digit OTP sent to your email.
      </p>
      <form>
        <div className="flex space-x-2 justify-center mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              className="w-10 h-10 md:w-12 md:h-12 border text-black border-gray-300 rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-main"
              maxlength="1"
              value={digit}
              placeholder="-"
              onChange={(e) => handleChange(e, index)}
              onPaste={(e) => handlePaste(e)}
            />
          ))}
        </div>
        <div className="my-5 flex justify-between">
          {resendLoading ? (
            <p>loading...</p>
          ) : (
            <button
              className={
                resendSeconds === 0
                  ? "text-blue-500 hover:underline cursor-pointer "
                  : "text-gray-500"
              }
              disabled={resendSeconds !== 0}
              onClick={handleResending}
            >
              {resendSeconds === 0
                ? "Resend OTP?"
                : `Resend OTP in ${resendSeconds}s`}
            </button>
          )}
          <p>
            OTP will expire in{" "}
            <span className="px-2 border text-black border-gray-500 rounded">
              {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </p>
        </div>
        {error && <p className="my-2 text-red-400">{error}</p>}

        <button
          className="w-full bg-main text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-main-hover transition duration-200"
          onClick={handleOTPSubmit}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OTPSection;
