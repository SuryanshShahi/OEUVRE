import Button from "@/shared/Button/Button";
import React from "react";

const NewsLetter = () => {
  return (
    <div
      className="bg-cover text-white text-center py-14 relative px-5 !mt-0"
      style={{ backgroundImage: "url('/images/vr.webp')" }}
    >
      <div className="bg-[rgb(0,0,0,0.6)] w-full h-full absolute left-0 top-0"></div>
      <div className="relative space-y-8">
        <div className="sm:text-[36px] text-3xl font-medium sm:leading-[50px] max-w-[900px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
        <div className="relative w-fit mx-auto">
          <Button className="!rounded-full py-3 !px-11 absolute top-0 right-0">
            Send
          </Button>
          <input
            className="outline-none rounded-full text-black pl-5 pr-[8rem] h-12 max-w-[512px] w-[calc(100vw-40px)]"
            placeholder="Enter Email"
          />
        </div>
        <div>asdasdsad asd dadasd</div>
      </div>
    </div>
  );
};

export default NewsLetter;
