import React, { useState, useEffect } from "react";
import { InputField, Button, AbsoluteImages } from "../components";
import { useNavigate } from "react-router-dom";

const AdditionalDetails = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [petName, setPetName] = useState("");
  const [angry, setAngry] = useState(1);
  const [funny, setFunny] = useState("");
  const [smile, setSmile] = useState("");
  const [move, setMovie] = useState("");
  const [sport, setSport] = useState("");

  const sessionData = sessionStorage.getItem("userData");
  let userData = {};

  if (sessionData !== null) {
    userData = JSON.parse(sessionData);
  }

  const handleOnSubmit = () => {
    userData = { ...userData, petName, angry, funny, smile, move, sport };

    sessionStorage.setItem("userData", JSON.stringify(userData));
    navigate("/song-ready");
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
        className="w-[80%] grid gap-[12px]"
      >
        <div className="flex justify-center">
          <h1 className=" text-[16px] text-white font-bold">
            What is their pet name?
          </h1>
        </div>
        <InputField
          required={true}
          type="text"
          placeholder="Their Pet name"
          maxLength={50}
          onChange={(e) => setPetName(e.target.value)}
        />
        <div className="flex justify-center">
          <h1 className=" text-[16px] text-white font-bold">
            What makes them angry?
          </h1>
        </div>
        <InputField
          required={true}
          type="text"
          placeholder="What makes them angry?"
          maxLength={50}
          onChange={(e) => setAngry(e.target.value)}
        />
        <div className="flex justify-center">
          <h1 className=" text-[16px] text-white font-bold">
            What is the Funniest thing they do?
          </h1>
        </div>
        <InputField
          required={true}
          type="text"
          placeholder="What is the Funniest thing they do?"
          maxLength={50}
          onChange={(e) => setFunny(e.target.value)}
        />

        {showMore && (
          <>
            <div className="flex justify-center">
              <h1 className=" text-[16px] text-white font-bold">
                What makes them smile?
              </h1>
            </div>
            <InputField
              type="text"
              placeholder="What makes them smile?"
              maxLength={50}
              onChange={(e) => setSmile(e.target.value)}
            />
            <div className="flex justify-center">
              <h1 className=" text-[16px] text-white font-bold">
                What is their favourite movie?
              </h1>
            </div>
            <InputField
              type="text"
              placeholder="What is their favourite movie?"
              maxLength={50}
              onChange={(e) => setMovie(e.target.value)}
            />
            <div className="flex justify-center">
              <h1 className=" text-[16px] text-white font-bold">
                Thier Favourite sport?
              </h1>
            </div>
            <InputField
              type="text"
              placeholder="Thier Favourite sport?"
              maxLength={50}
              onChange={(e) => setSport(e.target.value)}
            />
          </>
        )}

        <div className="flex gap-[12px] justify-center">
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleShowMore();
            }}
            text={showMore ? "Answer less" : "Answer more"}
            className="h-[45px] disabled:bg-[#f2f2f275] bg-white w-[140px] rounded-[14px] font-bold"
          />
          <Button
            text="Proceed"
            type="submit"
            className="h-[45px] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetails;
