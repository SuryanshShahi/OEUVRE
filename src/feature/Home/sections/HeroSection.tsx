import Button from "@/shared/Button/Button";
import React, { useState } from "react";

const HeroSection = () => {
  const [isActive, setIsActive] = useState(0);
  const data = [
    {
      tabName: "Asdad",
      tabContent:
        "Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsuconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Dsddassdas",
      tabContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ncididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ncididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Sdfvds",
      tabContent:
        "Lorem ipsum dolor sit amet, ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      tabName: "Rty",
      tabContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporaliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporaliqua.",
    },
  ];
  return (
    <div className="space-y-28">
    
      <div className="space-y-10 md:mt-20 mt-10 container mx-auto px-5">
        <div className="text-center max-w-[850px] mx-auto space-y-4">
          <div className="text-5xl font-bold leading-[60px]">
            Experience Timeless Luxury, Redefined for Women
          </div>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
          <div
            className="card-type-2 h-[350px] rounded-2xl bg-cover w-full max-w-[250px]"
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
     
      <div className="relative bg-neutral-100 py-20 px-5">
        <p className="md:text-4xl text-3xl text-center md:leading-[60px] leading-[50px] container mx-auto md:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod ut labor
          <img
            src="/images/vr.webp"
            className="md:h-10 h-8 w-24 float-start mt-3 rounded-full"
          />
          tempor incididunt et Lorem ipsum dolor sit amet, consectetur
          adipiscing elit,
          <img
            src="/images/vr.webp"
            className="md:h-10 h-8 w-24 float-right mt-3 rounded-full"
          />
          sed do eiusmod ut labore tempor incididunt
          <img
            src="/images/vr.webp"
            className="md:h-10 h-8 w-24 float-start mt-3 rounded-full"
          />
          et sed do eiusmod ut labore tempor incididunt et
        </p>
      </div>

      <div className="text-center space-y-4 container mx-auto px-5">
        <div className="text-5xl font-bold leading-[60px]">
          New Collection of Us
        </div>
        <p className="text-gray-800 max-w-[800px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
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

          <div className="max-w-[250px] ">
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

      <div className="grid md:grid-cols-2">
        <div
          className="justify-center flex flex-col items-center text-white w-full bg-cover min-h-[400px]"
          style={{ backgroundImage: "url('/images/vr.webp')" }}
        >
          <div className="text-start font-semibold text-3xl">HOUSEWILDS</div>
          <div className="text-start text-sm">HSAHJKDFASHDH</div>
        </div>
        <div className="max-w-sm m-auto md:py-32 py-20">
          <div className="text-xs">asdsd</div>
          <div className="text-3xl font-bold my-2">Every mom deserves</div>
          <div className="">asdsd adasd</div>
          <div className="text-[18px] font-bold mt-1">700 INR</div>
          <div className="mt-5">
            <div className="gap-x-3 flex items-center">
              {data?.map((item, idx) => (
                <div
                  key={idx}
                  className={`cursor-pointer font-semibold ${
                    isActive === idx ? "border-b-2 border-b-black" : ""
                  }`}
                  onClick={() => setIsActive(idx)}
                >
                  {item?.tabName}
                </div>
              ))}
            </div>
            <div className="text-sm font-light mt-3">
              {data[isActive]?.tabContent}
            </div>
          </div>
          <Button className="w-full bg-transparent mt-10 !rounded-full border-black border-2 !text-black hover:!text-white hover:!bg-black">
            Add to Bag
          </Button>
        </div>
      </div>

      <div className="space-y-10 sm:mt-20 mt-10 container mx-auto px-5">
        <div className="text-center max-w-[850px] mx-auto space-y-4">
          <div className="text-5xl font-bold leading-[60px]">
            Made To Raise Your Standards
          </div>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

      <div className="relative bg-neutral-100 py-20 px-5 overflow-hidden">
        <div className="text-center space-y-4">
          <div className="text-5xl font-bold leading-[60px]">
            Styles That Welcome's Sunshine's Return
          </div>
          <p className="text-gray-800 max-w-[800px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex -ml-20 !mt-14">
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-12"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
            />

            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[22deg] -ml-5 mt-3"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
            />
            <img
              src="/images/vr.webp"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[20deg] -ml-10 mt-3"
            />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default HeroSection;
