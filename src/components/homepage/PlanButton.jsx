import React from "react";

const PlanButton = ({ children, onSelect, isSelected }) => {
  return (
    <div>
      <li>
        <button
          className={`${
            isSelected ? "active" : ""
          } w-[118px] h-[55px] flex items-center justify-center`}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </div>
  );
};

export default PlanButton;
