import React from "react";
import Categories from "./categories";
import Button from "./button";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div>
      <div className="flex justify-between items-center pb-5 px-[100px] mt-[11rem]">
        <Categories
          title="Frequently Asked Questions"
          details="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        />
        <Button
          text="Ask a Question"
          backgroundColor="bg-[red]"
          paddingX="px-3"
          paddingY="py-3"
        />
      </div>
      <div className="px-[100px] flex justify-between mt-[3rem]">
        <div>
          <Accordion
            title="What is VastStreams all about?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="How much does VastStreams cost?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="What contents are available on VastStreams?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="How can I watch VastStreams?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
        </div>
        <div>
          <Accordion
            title="How do I sign up for VastStreams?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="What is the VastStreams free trial duration?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="How do I contact VastStreams customer support??"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
          <Accordion
            title="What are the VastStreams payment methods?"
            content="VastStreams is a streaming service that allows you to watch movies and shows on demand."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
