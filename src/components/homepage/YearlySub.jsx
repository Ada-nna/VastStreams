import React from "react";
import PlanCards from "./PlanCards";

const YearlySub = () => {
  return (
    <div className="mt-[5rem] flex justify-between flex-wrap">
      <PlanCards
        plan="Basic Plan"
        text="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
        price="$54.99"
        duration="/annum"
      />
      <PlanCards
        plan="Standard Plan"
        text="Access to a wider selection of movies and shows, including most new releases and exclusive content."
        price="$87.99"
        duration="/annum"
      />
      <PlanCards
        plan="Premium Plan"
        text="Access to a widest selection of movies and shows, including all new releases and offline viewing."
        price="$131.99"
        duration="/annum"
      />
    </div>
  );
};

export default YearlySub;
