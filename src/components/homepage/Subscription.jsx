import React, { useState } from "react";
import Categories from "./categories";
import MonthlySub from "./MonthlySub";
import SubscriptionBtns from "./SubscriptionBtns";
import YearlySub from "./YearlySub";

const Subscription = () => {
  const [selectedTopic, setSelectedTopic] = useState("monthly");
  function handleSelect(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }
  return (
    <div className="pb-5 px-[100px] mt-[11rem]">
      <div className="flex justify-between items-center">
        <Categories
          title="Choose the plan that's right for you"
          details="Join VastStreams and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        />

        <div className="border border-[#353535] rounded-[10px] flex items-center justify-between h-[75px] w-[237px] text-[18px] px-2">
          <div className={`rounded-[10px] ${selectedTopic === "monthly" ? "bg-[#1F1F1F]" : ""} w-[118px] h-[55px] flex items-center justify-center`}>
            <SubscriptionBtns
              isSelected={selectedTopic === "monthly"}
              onSelect={() => handleSelect("monthly")}
            >
              Monthly
            </SubscriptionBtns>
          </div>
          <div className={`rounded-[10px] ${selectedTopic === "yearly" ? "bg-[#1F1F1F]" : ""} w-[118px] h-[55px] flex items-center justify-center`}>
            <SubscriptionBtns
              isSelected={selectedTopic === "yearly"}
              onSelect={() => handleSelect("yearly")}
            >
              Yearly
            </SubscriptionBtns>
          </div>
        </div>
      </div>
      {selectedTopic === "monthly" ? <MonthlySub /> : <YearlySub />}
    </div>
  );
};

export default Subscription;
