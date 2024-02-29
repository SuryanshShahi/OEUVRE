import React from "react";
import Img from "./Img";

const DroppedCard = ({
  data,
  height,
  width,
  className,
}: {
  data: any;
  height: number;
  width: number;
  className?: string;
}) => {
  return (
    <div
      className={`relative h-full group overflow-hidden rounded-[20px] ${className}`}
    >
      <Img
        src={data?.image}
        height={height}
        width={width}
        alt=""
        isLocal
        className="h-full w-full object-cover rounded-[20px] duration-700 group-hover:scale-110"
      />
      <div className="group-hover:opacity-0 duration-700 h-full w-full sm:gap-y-6 gap-y-2 lg:px-10 px-5 pb-5 flex flex-col justify-end top-0 rounded-2xl bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_40%,#000_100%)] absolute">
        <div className="lg:text-4xl text-2xl font-bold">{data?.title}</div>
        <p className="sm:text-base text-sm">{data?.description}</p>
        <div className="flex sm:mt-0 mt-5 lg:text-lg sm:text-base text-sm justify-between">
          <div>{data?.price}</div>
          <div>Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default DroppedCard;
