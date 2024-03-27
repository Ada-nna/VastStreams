import React from "react";
import { Link } from "react-router-dom";

const SwiperCards = ({ image, title }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "270px",
          width: "100%",
        }}
        className="rounded-[10px]"
      />
      <Link to="/" className="flex justify-between items-center mt-3">
        <p className="font-semibold text-[18px]">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SwiperCards;
