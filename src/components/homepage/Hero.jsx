import React from "react";
import BackgroundImage from "../../assets/hero/movies_bgc.png";
import Navbar from "./navbar/Navbar";
// import LogoAbstract from "../../assets/hero/abstract-design.png";
import HeroImage from "./navbar/logo.jsx";
import Button from "./button.jsx";

const Hero = () => {
  return (
    <div className="overflow-hidden smallScreen">
      <div
        className="relative smallScreen2"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <div className="bg-black opacity-[0.88] inset-0 w-screen">
          <div className="absolute z-1 py-5 px-[13rem] w-screen">
            <Navbar />
          </div>

          {/* logo abstract here */}
          <div className="">
            <HeroImage />
          </div>
          <div className="flex flex-col justify-center place-items-center p-5">
            <h1 className="font-bold text-[58px] text-center">
              The Best Streaming Experience
            </h1>
            <p className="text-[18px] w-[62rem] text-center text-[#999999]">
              VastStreams is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              VastStreams, you can enjoy a wide variety of content, including
              the latest blockbusters, classic movies, popular TV shows, and
              more. You can also create your own watchlists, so you can easily
              find the content you want to watch.
            </p>
            <div className="mt-5">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
