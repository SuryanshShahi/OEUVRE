import Button from "@/shared/Button/Button";
import React from "react";

const HouseWild = ({
  data,
  isActive,
  setIsActive,
}: {
  data: any;
  isActive: number;
  setIsActive: (idx: number) => void;
}) => {
  return (
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
            {data?.map((item: any, idx: number) => (
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
  );
};

export default HouseWild;