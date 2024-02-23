import Img from "@/shared/Img";
import React from "react";

const PerfectOutfit = () => {
  return (
    <div className="relative bg-neutral-100 py-20 px-5">
      <p className="md:text-4xl text-3xl text-center md:leading-[60px] leading-[50px] container mx-auto md:px-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        ut labor
        <Img
          src="/images/vr.webp"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 float-start mt-3 rounded-full"
          isLocal
        />
        tempor incididunt et Lorem ipsum dolor sit amet, consectetur adipiscing
        elit,
        <Img
          src="/images/vr.webp"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 float-right mt-3 rounded-full"
          isLocal
        />
        sed do eiusmod ut labore tempor incididunt
        <Img
          src="/images/vr.webp"
          alt="image"
          height={32}
          width={96}
          className="md:h-10 float-start mt-3 rounded-full"
          isLocal
        />
        et sed do eiusmod ut labore tempor incididunt et
      </p>
    </div>
  );
};

export default PerfectOutfit;
