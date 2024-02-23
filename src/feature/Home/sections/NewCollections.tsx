import React from "react";

const NewCollections = () => {
  return (
    <div className="text-center space-y-4 max-w-[1024px] mx-auto px-5">
      <div className="text-5xl leading-[60px] ">
        Our Inaugral Line
      </div>
      <p className="text-secondary max-w-[800px] mx-auto">
      From concept to creation, we prioritize precision, ensuring that every stitch, fabric, and detail contributes to a masterpiece that stands the test of time.
      </p>
      <div className="flex max-[1024px]:flex-wrap sm:text-start text-center sm:justify-between justify-center items-center gap-5 !mt-8">
        <div className="max-w-[300px]">
          <img
            src="/images/vr.webp"
            className="rounded-3xl h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            Work of Art
          </div>
          <div className="text-xs">labore et dolore</div>
        </div>

        <div
          className="max-w-[350px] max-[1024px]:order-last rounded-3xl card-type-2 gap-2 justify-center flex flex-col items-center text-white h-[430px] w-full bg-cover"
          style={{ backgroundImage: "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4080.jpg?tr=h-860')" }}
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
