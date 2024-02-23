import Img from "@/shared/Img";
import React from "react";

const Sunshine = () => {
  return (
    <div className="relative bg-neutral-100 py-20 overflow-hidden">
      <div className="text-center space-y-4">
        <div className="text-5xl leading-[60px] font-bold">
        Luxury that blends with comfort
        </div>
        <p className="text-gray-800 max-w-[800px] mx-auto">
        Crafted with the finest materials, our clothing offers unparalleled breathability, ensuring you feel at ease in any setting.
        </p>
        <div className="flex -ml-20 !mt-14 py-5 sm:py-0 max-[640px]:overflow-x-scroll">
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-12"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
            height={280}
            width={220}
            isLocal
          />

          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[22deg] -ml-5 mt-3"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
            height={280}
            width={220}
            isLocal
          />
          <Img
            src="/images/vr.webp"
            alt="image"
            className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[20deg] -ml-10 mt-3"
            height={280}
            width={220}
            isLocal
          />
        </div>
      </div>
    </div>
  );
};

export default Sunshine;
