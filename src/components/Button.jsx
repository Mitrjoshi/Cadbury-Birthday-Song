import React from "react";

const Button = ({ text, className, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
