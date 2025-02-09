import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { URL } from "../Common/api";
import { config } from "../Common/configurations";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SentEmailOtpSection = ({ email, setEmail, setEmailSec, setOTPSec }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      console.log(user);
      setEmail(user?.email);
    }
  }, [user]);

  // Function to mask email
  const maskEmail = (email) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    const maskedUsername =
      username.length > 2
        ? username[0]+username[1] +
          "*".repeat(username.length - 3) +
          username[username.length - 1]
        : username;
    return `${maskedUsername}@${domain}`;
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError("Enter an email to continue");
      return;
    }
    setLoading(true);
    axios
      .post(`${URL}/auth/forget-password`, { email }, config)
      .then(({ data }) => {
        if (data.success) {
          setEmailSec(false);
          setOTPSec(true);
          setLoading(false);
          toast.success(data.msg);
        }
      })
      .catch(({ response }) => {
        setError(response.data.error);
        setLoading(false);
      });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
        Reset Password
      </h2>
      <p className="text-center text-gray-600 mb-6">
        We'll send an OTP to verify your identity
      </p>
      <div className="mb-4 text-center">
        <p className="text-gray-700 font-semibold">Confirm Email Address</p>
        <p className="text-gray-500 mt-2">{maskEmail('sreenathsrp.me@gmail.com')}</p>
      </div>
      {error && <p className="my-2 text-red-400 text-center">{error}</p>}
      <button
        onClick={handleEmailSubmit}
        disabled={loading}
        className="w-full bg-main text-white py-2 md:py-3 
                   rounded-lg font-semibold mt-4
                   hover:bg-opacity-90 transition duration-200"
      >
        {loading ? "Sending..." : "Send OTP"}
      </button>
      <div className="text-center mt-6">
        <p className="text-gray-600">
          Changed your mind?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-main hover:underline cursor-pointer"
          >
            Back to Home
          </span>
        </p>
      </div>
    </div>
  );
};

export default SentEmailOtpSection;
