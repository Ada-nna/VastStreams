import BackgroundImage from "../../assets/hero/movies_bgc.png";
import Navbar from "./navbar/Navbar";
import HeroImage from "./navbar/logo.jsx";
import Button from "./button.jsx";

const Hero = () => {
  return (
    <div className="">
      <div
        className=" w-[100%]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black opacity-[0.88] inset-0 w-[100%]">
          <div className="py-5 px-[30px] lg:px-[100px]">
            <Navbar />
          </div>

          {/* logo abstract here */}
          <div className="">
            <HeroImage />
          </div>
          <div className="flex flex-col justify-center place-items-center pt-[6.5rem] w-[100%]">
            <h1 className="font-bold text-[38px] md:text-[58px] text-center">
              The Best Streaming Experience
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center w-[100%] px-[30px] lg:px-[100px]">
        <p className="text-[14px] lg:text-[18px] lg:w-[60%] text-center font-medium text-[#999999] ">
          VastStreams is the best streaming experience for watching your
          favorite movies and shows on demand, anytime, anywhere. With
          VastStreams, you can enjoy a wide variety of content, including the
          latest blockbusters, classic movies, popular TV shows, and more. You
          can also create your own watchlists, so you can easily find the
          content you want to watch.
        </p>
        <div className="mt-5">
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
            text="Start Watching Now"
            backgroundColor="bg-[red]"
            paddingX="px-3"
            paddingY="py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
