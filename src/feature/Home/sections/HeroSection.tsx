import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-10 md:mt-20 mt-10 max-w-[1140px] mx-auto px-5">
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl font-bold leading-[60px] font-Luxyna">
          Experience Timeless Luxury, Redefined for Women
        </div>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
        <div
          className="card-type-2 h-[350px] rounded-2xl bg-cover w-full max-w-[300px]"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        ></div>
        <div
          className="card-type-1 max-[1024px]:order-last h-[350px] rounded-2xl bg-cover w-full"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        ></div>
        <div
          className="rounded-2xl h-[350px] bg-cover w-full max-w-[250px]"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
