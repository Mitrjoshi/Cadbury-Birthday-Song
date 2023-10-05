import React from "react";

const ToastMessage = ({ message }) => {
  return (
    <div className="toast_container">
      <div className="toast_message">
        <p className="font-bold text-[#350073]">{message}</p>
      </div>
    </div>
  );
};

export default ToastMessage;
