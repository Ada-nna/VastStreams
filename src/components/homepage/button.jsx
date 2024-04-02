import React from "react";

const Button = ({
  icon,
  text,
  backgroundColor,
  paddingX,
  paddingY,
  type = "button",
}) => {
  return (
    <div>
      <button
        type={type}
        className={`${backgroundColor} flex items-center justify-center gap-1 ${paddingX} ${paddingY} rounded-[7px] font-semibold text-[18px]`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
