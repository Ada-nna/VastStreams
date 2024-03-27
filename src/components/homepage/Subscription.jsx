import React from "react";
import Categories from "./categories";
import { Link } from "react-router-dom";
import PlanCards from "./PlanCards";

const Subscription = () => {
  return (
    <div className="pb-5 px-[100px] mt-[11rem]">
      <div className="flex justify-between items-center">
        <Categories
          title="Choose the plan that's right for you"
          details="Join VastStreams and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />

        <div className=" border border-[#353535] rounded-[10px] flex items-center justify-between h-[75px] w-[237px] text-[18px] px-2">
          <Link className="rounded-[10px] bg-[#1F1F1F] w-[118px] h-[55px] flex items-center justify-center">
            Monthly
          </Link>
          <Link className="w-[118px] h-[55px] flex items-center justify-center">
            Yearly
          </Link>
        </div>
      </div>

      {/* plan boxes... */}
      <div className="mt-[5rem] flex justify-between flex-wrap">
        <PlanCards
          plan="Basic Plan"
          text="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
          price="$9.99"
        />
        <PlanCards
          plan="Standard Plan"
          text="Access to a wider selection of movies and shows, including most new releases and exclusive content."
          price="$12.99"
        />
        <PlanCards
          plan="Premium Plan"
          text="Access to a widest selection of movies and shows, including all new releases and offline viewing."
          price="$14.99"
        />
      </div>
    </div>
  );
};

export default Subscription;
