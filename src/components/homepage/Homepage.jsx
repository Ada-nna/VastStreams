import Hero from "./Hero";
import Categories from "./categories.jsx";
import Swiper from "./Swiper.jsx";

const Homepage = () => {
  return (
    <div className="w-[100%]">
      <Hero />
      <Categories />
      <Swiper />
    </div>
  );
};

export default Homepage;
