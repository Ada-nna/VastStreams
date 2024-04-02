import React from "react";
import { Link } from "react-router-dom";
import AvatarBcg from "../../assets/hero/avatar.webp";
import Navbar from "../homepage/navbar/Navbar";
import Button from "../homepage/button";
import { Icons } from "./WatchIcons";

const MovHero = () => {
  return (
    <div
      className="w-[100%] h-[835px] relative"
      style={{
        backgroundImage: `url(${AvatarBcg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 bg-black opacity-[0.8] inset-0 w-[100%] h-[100%]"></div>
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <div className="py-5 px-[100px]">
          <Navbar />
        </div>
        <div className="pt-[29rem]">
          <h1 className="font-bold text-[58px] text-center">
            Avatar the Last Airbender
          </h1>
          <p className="text-[18px] mt-3 font-medium text-center text-[#999999]">
            A young boy known as the Avatar must master the four elemental
            powers —water, earth, fire or air, to save the world, and fight
            against an enemy bent on stopping him.
          </p>
          <div className="flex items-center justify-center gap-x-4 mt-[2rem]">
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              }
              text="Play Now"
              backgroundColor="bg-[red]"
              paddingX="px-5"
              paddingY="py-[14px]"
            />

            <ul className="flex items-center justify-center gap-x-4 ">
              {Icons.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="h-[56px] w-[56px] bg-[#0F0F0F] border-[#474747] border flex items-center justify-center rounded-[8px] hover:bg-[#262525] duration-300"
                  >
                    <Link to="/">{item.icon}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovHero;
