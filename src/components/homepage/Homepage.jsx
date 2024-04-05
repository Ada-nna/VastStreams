import Hero from "./Hero";
import Categories from "./categories.jsx";
import Swiper from "./Swiper.jsx";
import Devices from "./devices.jsx";
import FAQ from "./FAQ.jsx";
import Subscription from "./Subscription.jsx";
import Trial from "./Trial.jsx";
import Footer from "./Footer.jsx";

const Homepage = () => {
  return (
    <div className="w-[100%]">
      <Hero />
      <div className="pb-5 px-[30px] lg:px-[100px] mt-[8rem] lg:mt-[11rem]">
        <Categories
          title="Explore our wide variety of categories"
          details="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new."
        />
      </div>
      <Swiper />
      <Devices />
      <FAQ />
      <Subscription />
      <Trial />
      <Footer />
    </div>
  );
};

export default Homepage;
