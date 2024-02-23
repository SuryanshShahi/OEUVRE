import React from "react";

const HeroSection = () => {
  return (
    <div className="space-y-10 md:mt-20 mt-10 max-w-[1250px] mx-auto px-5 bg">
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl font-bold leading-[60px]">
        Experience the Epitome of Luxury, Where Fashion Meets Art!!
        </div>
        <p className="text-gray-800">
        Indulge in the fusion of luxury and artistry with Oeuvre- a testament to the confluence of fashion creativity, creativity, and individuality.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
        <div
          className="card-type-2 h-[400px] rounded-2xl bg-cover w-full max-w-[300px]"
          style={{ backgroundImage: "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4050.jpg?tr=w-600')" }}
        ></div>
        <div
          className="card-type-1 max-[1024px]:order-last h-[400px] rounded-2xl bg-cover w-full"
          style={{ backgroundImage: "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4361.jpg?tr=h-800')" }}
        ></div>
        <div
          className="rounded-2xl h-[400px] bg-cover w-full max-w-[250px]"
          style={{ backgroundImage: "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A3922.jpg?tr=w-600')" }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
