import React from "react";

const SubscriptionBtns = ({ children, onSelect }) => {
  return (
    <li className="list-none">
      <button onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default SubscriptionBtns;
