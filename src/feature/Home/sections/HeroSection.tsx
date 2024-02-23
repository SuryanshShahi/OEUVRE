import Img from "@/shared/Img";
import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-10 md:mt-20 mt-10 max-w-[1250px] mx-auto px-5 bg">
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl leading-[60px]">
          Experience the Epitome of Luxury, Where Fashion Meets Art
        </div>
        <p className="text-secondary">
          Indulge in the fusion of luxury and artistry with Oeuvre - a testament
          to the confluence of fashion creativity, creativity, and
          individuality.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
        <div className="card-type-2 relative bg-[rgb(0,0,0,0.2)] space-y-2 p-4 text-white h-[400px] rounded-2xl bg-cover w-full max-w-[300px]">
          <Img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4050.jpg?tr=w-600"
            alt="image"
            height={400}
            width={300}
            isLocal
            className="absolute h-full opacity-30 rounded-2xl w-full top-0 left-0"
          />
          <div className="text-2xl font-medium">100+ Collections</div>
          <p className="text-sm">
            asdsad as d dasd asd sadas das dasd sada das d ad d ad adasd
          </p>
          <div className="text-xl bottom-3 right-8 absolute">Shop Soon</div>
        </div>
        <div
          className="card-type-1 max-[1024px]:order-last h-[400px] rounded-2xl bg-cover w-full"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4361.jpg')",
          }}
        ></div>
        <div
          className="rounded-2xl h-[400px] flex flex-col items-center justify-center text-white bg-cover w-full max-w-[250px]"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A3922.jpg?tr=w-600')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
<div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
  <div
    className="card-type-2 h-[400px] rounded-2xl bg-cover w-full max-w-[300px]"
    style={{
      backgroundImage:
        "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4050.jpg?tr=w-600')",
    }}
  ></div>
  <div
    className="card-type-1 max-[1024px]:order-last h-[400px] rounded-2xl bg-cover w-full"
    style={{
      backgroundImage:
        "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4361.jpg?tr=h-800')",
    }}
  ></div>
  <div
    className="rounded-2xl h-[400px] bg-cover w-full max-w-[250px]"
    style={{
      backgroundImage:
        "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A3922.jpg?tr=w-600')",
    }}
  ></div>
</div>;
