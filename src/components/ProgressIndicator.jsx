import React from "react";

const ProgressIndicator = ({ filled_value }) => {
  const progressItems = [];

  for (let i = 1; i <= 6; i++) {
    progressItems.push(
      <span
        key={i}
        className={`h-[12px] w-[12px] rounded-full border-2
        ${
          i <= filled_value
            ? "bg-[#ebb753]"
            : i === filled_value + 1
            ? "border-[#e6b29f]"
            : "bg-none"
        }
        `}
      ></span>
    );
  }

  return (
    <>
      <div className="z-[99] flex items-center gap-[24px]">{progressItems}</div>
    </>
  );
};

export default ProgressIndicator;
