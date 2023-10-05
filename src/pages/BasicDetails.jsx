import React, { useState, useEffect } from "react";
import { InputField, Button, AbsoluteImages } from "../components";
import { useNavigate } from "react-router-dom";

const BasicDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("male");
  const [textValue, setTextValue] = useState("");

  const sessionData = sessionStorage.getItem("userData");
  let userData = {};

  if (sessionData !== null) {
    userData = JSON.parse(sessionData);
  }

  const handleOnSubmit = () => {
    userData = { ...userData, name, age, gender };

    sessionStorage.setItem("userData", JSON.stringify(userData));
    navigate("/loved-one-info/mood-details");
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
        <InputField
          required={true}
          type="text"
          name="name"
          placeholder="Their name"
          maxLength={50}
          onChange={(e) => {
            const inputValue = e.target.value;
            const textOnly = inputValue.replace(/[^A-Za-z\s]/g, "");
            setTextValue(textOnly);
            setName(e.target.value);
          }}
        />
        <InputField
          required={true}
          type="age"
          name="age"
          placeholder="Their age"
          maxLength={2}
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <select
          name="gender"
          className="outline-none h-[50px] w-full pl-6 rounded-full font-bold select_arrow_icon"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="flex justify-center">
          <Button
            disabled={textValue !== "" && name !== "" ? false : true}
            text="Proceed"
            type="submit"
            className="h-[45px] disabled:bg-[#f2f2f270] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;
