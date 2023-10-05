import React, { useState } from "react";
import { Navbar } from "../layouts";
import { InputField, Button, AbsoluteImages } from "../components";
import { useDispatch } from "react-redux";
import { otpModal } from "../features/otpVerificationModal";

const Home = () => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");

  const handleOpenOTPModal = () => {
    dispatch(otpModal({ value: true }));
  };

  return (
    <div className="height_of_pages home_page_gradient relative overflow-x-hidden z-[1]">
      <div className="grid gap-[12px]">
        <div className="flex items-center justify-center pt-10">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b9d95649193709.5ec79d32ba53e.jpg"
            alt="Cadbury Birthday rap"
            className="h-[18rem] rounded-[24px]"
          />
        </div>
        <div className="flex justify-center text-[22px] text-white font-bold">
          <h1>Register to create</h1>
        </div>
      </div>
      <div className="flex flex-col items-center py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleOpenOTPModal();
          }}
          className="w-[80%] grid gap-[12px]"
        >
          <InputField
            required={true}
            type="tel"
            placeholder="Phone Number"
            maxLength={10}
            minLength={10}
          />
          <InputField
            required={true}
            type="text"
            placeholder="Full name"
            maxLength={50}
            onChange={(e) => {
              const inputValue = e.target.value;
              const textOnly = inputValue.replace(/[^A-Za-z\s]/g, "");
              setTextValue(textOnly);
            }}
          />
          <InputField required={true} type="email" placeholder="Email ID" />

          <div className="grid gap-[12px] justify-start">
            <span className="flex items-center gap-2">
              <input type="checkbox" required />
              <p className="text-white text-[14px]">
                I accept Terms & Conditions and Privacy Policy of Mondelez
                (Cadburry).
              </p>
            </span>
            <span className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-white text-[14px]">
                I would like to recieve proportional communication from Mondelez
                (Cadburry) about its produts and offers.
              </p>
            </span>
          </div>
          <div className="flex justify-center">
            <Button
              text="Submit"
              className="h-[45px] disabled:bg-[#f2f2f270] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
              disabled={textValue !== "" ? false : true}
            />
          </div>
        </form>
      </div>
      {/* blobs */}
      <div className="h-[40vh] w-[40vh] rounded-full bg-[#6d00e750] absolute top-[-5%] left-[-40%] z-[-1] animate-bounce"></div>
      <div className="h-[20vh] w-[20vh] rounded-full bg-[#6d00e750] absolute bottom-5 left-2 z-[-1] animate-bounce"></div>
      <div className="h-[30vh] w-[30vh] rounded-full bg-[#6d00e750] absolute bottom-[10%] right-[-30%] z-[-1] animate-bounce"></div>
      {/* images */}
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/3xctc4IWO7B0ibLFI1yybi/0efe4a75fd57b5ad2cba33dbf9ab5f10/Cameos__6_.png?fm=webp&q=80"
        style=" bottom-3 h-[120px] right-0"
      />
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/2wC68NLrrsMn6Ze5WPiqvr/46780c41ee6f84a090d8481714bab145/Hazelnut.png?fm=webp&q=80"
        style=" bottom-[50%] h-[120px] left-0 rotate-[20deg]"
      />
    </div>
  );
};

export default Home;
