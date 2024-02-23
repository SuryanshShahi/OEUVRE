import React from "react";

const RaiseStandards = () => {
  return (
    <div className="space-y-10 sm:mt-20 mt-10 max-w-[1140px] mx-auto px-5">
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl font-bold leading-[60px]">
          Made To Raise Your Standards
        </div>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:text-start text-center sm:justify-between justify-center items-center gap-5 !mt-8">
        <div className="max-w-[250px]">
          <img
            src="/images/vr.webp"
            className="rounded-2xl h-[300px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            labore et dolore magna
          </div>
          <div className="text-xs">labore et dolore</div>
        </div>

        <div
          className="max-[1024px]:order-last rounded-2xl card-type-2 gap-2 justify-center flex flex-col items-center text-white h-[400px] w-full bg-cover"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        >
          <div className="font-semibold text-3xl">HOUSEWILDS</div>
          <div className="text-sm">HSAHJKDFASHDH</div>
        </div>

        <div className="max-w-[250px]">
          <img
            src="/images/vr.webp"
            className="rounded-2xl h-[300px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            labore et dolore magna
          </div>
          <div className="text-xs">labore et dolore</div>
        </div>
      </div>
    </div>
  );
};

export default RaiseStandards;
