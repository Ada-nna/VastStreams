import React from "react";

const DeviceCards = ({ icon, title, details }) => {
  return (
    <div
      className="w-[540px] h-[283px] rounded-[10px] border border-[#353535] p-[3.5rem] flex flex-col justify-between"
      style={{
        backgroundImage:
          "linear-gradient(to top right, #0F0F0F, #0F0F0F 60%, #2e0707 100%)",
      }}
    >
      <div className="flex items-center space-x-4">
        <div className="h-[65px] w-[65px] border-[#353535] border rounded-[12px] flex justify-center items-center bg-[#1F1F1F]">
          <img src={icon} alt="icon" className="h-[40px] w-[40px]" />
        </div>
        <h1 className="text-[24px] font-semibold">{title}</h1>
      </div>
      <p className="text-[18px] text-[#999999] w-full">{details}</p>
    </div>
  );
};

export default DeviceCards;

