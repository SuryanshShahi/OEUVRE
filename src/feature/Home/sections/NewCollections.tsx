import React from "react";

const NewCollections = () => {
  return (
    <div className="text-center space-y-4 max-w-[1024px] mx-auto px-5">
      <div className="text-5xl font-bold leading-[60px]">
        New Collection of Us
      </div>
      <p className="text-gray-800 max-w-[800px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
      <div className="flex max-[1024px]:flex-wrap sm:text-start text-center sm:justify-between justify-center items-center gap-5 !mt-8">
        <div className="max-w-[300px]">
          <img
            src="/images/vr.webp"
            className="rounded-3xl h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            labore et dolore magna
          </div>
          <div className="text-xs">labore et dolore</div>
        </div>

        <div
          className="max-w-[350px] max-[1024px]:order-last rounded-3xl card-type-2 gap-2 justify-center flex flex-col items-center text-white h-[430px] w-full bg-cover"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        >
          <div className="font-semibold text-3xl">HOUSEWILDS</div>
          <div className="text-sm">HSAHJKDFASHDH</div>
        </div>

        <div className="max-w-[300px]">
          <img
            src="/images/vr.webp"
            className="rounded-3xl h-[350px] w-full object-cover"
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

export default NewCollections;
