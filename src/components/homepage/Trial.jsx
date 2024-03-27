import React from "react";
import TrialImage from "../../assets/trial/trial-img.png";
import Categories from "./categories";
import Button from "./button";

const Trial = () => {
  return (
    <div className="pb-5 px-[100px] mt-[11rem]">
      <div
        style={{
          backgroundImage: `url(${TrialImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "19.6rem",
          borderRadius: "12px",
        }}
        className="flex justify-between items-center px-[5rem]"
      >
        <Categories
          title="Start your free trial today!"
          details="This is a clear and concise call to action that encourages users to sign up for a free trial of VastStreams"
        />
        <Button
          text="Start a Free Trial"
          backgroundColor="bg-[red]"
          paddingX="px-6"
          paddingY="py-4"
        />
      </div>
    </div>
  );
};

export default Trial;
