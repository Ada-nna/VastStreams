import BackgroundImage from "../../assets/hero/movies_bgc.png";
import Navbar from "./navbar/Navbar";
// import LogoAbstract from "../../assets/hero/abstract-design.png";
import HeroImage from "./navbar/logo.jsx";
import Button from "./button.jsx";

const Hero = () => {
  return (
    <div className="smallScreen">
      <div
        className=" w-[100%] smallScreen2"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black opacity-[0.88] inset-0 w-[100%]">
          <div className="py-5 px-[13rem]">
          <Navbar />
          </div>

          {/* logo abstract here */}
          <div className="">
            <HeroImage />
          </div>
          <div className="flex flex-col justify-center place-items-center w-[100%]">
            <h1 className="font-bold text-[58px] text-center">
              The Best Streaming Experience
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center p-5 w-[100%]">
        <p className="text-[18px] w-[60%] text-center text-[#999999]">
          VastStreams is the best streaming experience for watching your
          favorite movies and shows on demand, anytime, anywhere. With
          VastStreams, you can enjoy a wide variety of content, including the
          latest blockbusters, classic movies, popular TV shows, and more. You
          can also create your own watchlists, so you can easily find the
          content you want to watch.
        </p>
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
