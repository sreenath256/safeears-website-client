import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPSection from "../components/OTPSection";
import EnterEmailSection from "../components/EnterEmailSection";
import ResetPasswordSection from "../components/ResetPasswordSection";
import SentEmailOtpSection from "../components/SentEmailOtpSection";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const { user, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [emailSec, setEmailSec] = useState(true);
  const [otpSec, setOTPSec] = useState(false);
  const [passwordSec, setPasswordSec] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const [otpExpired, setOTPExpired] = useState(false);

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [user, loading]);



  return (
    <div className="bg-gradient-to-r from-[#007669] via-[#00726f] to-[#006b7c] flex items-center justify-center min-h-[80vh]">
      {loading && <p>Loading...</p>}
      {emailSec && userLoggedIn && (
        <SentEmailOtpSection
          setEmailSec={setEmailSec}
          setOTPSec={setOTPSec}
          email={email}
          setEmail={setEmail}
        />
      )}

      {emailSec && !userLoggedIn && (
        <EnterEmailSection
          setEmailSec={setEmailSec}
          setOTPSec={setOTPSec}

          
          email={email}
          setEmail={setEmail}
        />
      )}

      {otpSec && (
        <OTPSection
          email={email}
          setOTPSec={setOTPSec}
          setPasswordSec={setPasswordSec}
          setOTPExpired={setOTPExpired}
        />
      )}
      {passwordSec && (
        <ResetPasswordSection
          email={email}
          setFinalMessage={setFinalMessage}
          setPasswordSec={setPasswordSec}
        />
      )}
    </div>
  );
};

export default ForgotPassword;
