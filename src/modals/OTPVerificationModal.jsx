import React, { useRef, useState } from "react";
import { Button } from "../components";
import { useDispatch } from "react-redux";
import { clickToast } from "../features/toastMessage";
import { useNavigate } from "react-router-dom";
import { otpModal } from "../features/otpVerificationModal";

const OTPVerificationModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const expectedOTP = "1234";
  const [enteredOTP, setEnteredOTP] = useState("");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    setEnteredOTP((prevOTP) => {
      const updatedOTP =
        prevOTP.substring(0, index) + value + prevOTP.substring(index + 1);
      return updatedOTP;
    });

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (!value && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredOTP === expectedOTP) {
      dispatch(otpModal({ value: false }));
      dispatch(clickToast({ value: true, message: "Welcome user" }));
      navigate("/loved-one-info/basic-details");
    } else {
      dispatch(clickToast({ value: true, message: "OTP is incorrect" }));
    }
  };

  return (
    <div className="absolute flex items-center justify-center top-0 right-0 backdrop-blur-sm h-full w-full z-[10]">
      <form
        onSubmit={handleSubmit}
        className="grid items-center justify-center w-[80%] bg-white rounded-[12px] py-[24px] gap-[24px]"
      >
        <div className="flex-col flex items-center justify-start gap-[12px]">
          <div>
            <h1 className="text-[24px] font-[900] text-[#350073]">Enter OTP</h1>
          </div>
          <div className="flex gap-[12px]">
            {inputRefs.map((inputRef, index) => (
              <input
                required
                key={index}
                type="text"
                className="bg-[#350073] w-[50px] h-[50px] rounded-[12px] text-white font-bold outline-none flex text-[16px] text-center"
                ref={inputRef}
                onChange={(e) => handleInputChange(e, index)}
                maxLength="1"
              />
            ))}
          </div>
          <div className="flex justify-end w-full">
            <h3 className="text-[16px] underline font-[900] text-[#350073]">
              Resend OTP
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            type="submit" // Specify type as "submit" for the submit button
            text="Submit"
            className="h-[45px] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default OTPVerificationModal;
