import React from "react";

const InputField = ({
  type,
  placeholder,
  maxLength,
  minLength,
  required,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      className="outline-none h-[50px] w-full pl-6 rounded-full font-bold"
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
