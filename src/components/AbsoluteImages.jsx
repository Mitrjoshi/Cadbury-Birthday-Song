import React from "react";

const AbsoluteImages = ({ style, image }) => {
  return (
    <img
      src={image}
      alt="AbsoluteImages"
      className={`absolute z-[-2] ${style}`}
    />
  );
};

export default AbsoluteImages;
