import React from "react";
// import FetchData from "./FetchData";
import MovHero from "./MovHero";
import SwipeToSlide from "../homepage/Swiper";
import TopTen from "./TopTen";

const MoviesShows = () => {
  return (
    <div>
      <div className="">
        {/* <FetchData /> */}
        <MovHero />
        <div className=" border-2 h-[197.75rem]">
          <SwipeToSlide />
          <TopTen />
        </div>
      </div>
    </div>
  );
};

export default MoviesShows;
