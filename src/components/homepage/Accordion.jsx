import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div
      className={`gradient-border-bottom p-5 my-2 w-[49rem] cursor-pointer mx-4 md:mx-0 ${
        isOpen ? "bg-opacity-75" : "bg-opacity-100"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        <h2 className="text-[rgb(95, 99, 104)] text-[16px] md:text-[22px] leading-[20px] relative flex justify-between items-center p-2">
          {title}
          <span
            className="text-[15px] md:text-[18px] font-bold transform transition-transform duration-300"
            style={{
              transform: `rotate(${isOpen ? "180deg" : "0deg"}) scale(${
                isOpen ? "1" : "1"
              })`,
              display: "inline-block",
              transition: "transform 0.7s ease",
            }}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </h2>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <p className="text-[#999999] text-[14px] md:text-[17px] leading-[26px] p-2">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
