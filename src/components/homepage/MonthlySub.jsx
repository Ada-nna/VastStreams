import React from "react";
import PlanCards from "./PlanCards";

const MonthlySub = () => {
  return (
    <div className="mt-[5rem] flex justify-between flex-wrap">
      <PlanCards
        plan="Basic Plan"
        text="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
        price="$4.99"
        duration="/month"
      />
      <PlanCards
        plan="Standard Plan"
        text="Access to a wider selection of movies and shows, including most new releases and exclusive content."
        price="$7.99"
        duration="/month"
      />
      <PlanCards
        plan="Premium Plan"
        text="Access to a widest selection of movies and shows, including all new releases and offline viewing."
        price="$10.99"
        duration="/month"
      />
    </div>
  );
};

export default MonthlySub;
