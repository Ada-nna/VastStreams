import React from "react";
import Button from "./button";

const PlanCards = ({ plan, text, price, duration }) => {
  return (
    <div className="bg-[#1A1A1A] w-[550px] h-[425px] p-[3rem] rounded-[12px]">
      <h2 className="text-[24px] font-bold">{plan}</h2>
      <p className="text-[#999999] text-[18px] leading-[25px] mt-5 ">{text}</p>
      <h1 className="text-[40px] font-semibold mt-10">
        {price}
        <sub className="text-[#999999] text-[18px] font-normal"> {duration} </sub>
      </h1>
      <div className="flex items-center justify-between mt-10">
        <div className="border border-[#353535] rounded-[10px]">
          <Button
            text="Start Free Trial"
            paddingX="px-10"
            paddingY="py-3"
            backgroundColor="bg-[#262626]"
          />
        </div>
        <Button
          text="Choose Plan"
          backgroundColor="bg-[red]"
          paddingX="px-10"
          paddingY="py-3"
        />
      </div>
    </div>
  );
};

export default PlanCards;
