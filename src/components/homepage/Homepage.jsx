import React from "react";
import Hero from "./Hero";
import Categories from "./categories.jsx";
// import Swiper from './Swiper.jsx'

const Homepage = () => {
  return (
    <div className="w-screen ">
      <Hero />
      <Categories />
      {/* <Swiper /> */}
    </div>
  );
};

export default Homepage;
