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
    <div className="grid md:grid-cols-2 bg-neutral-100">
      <div
        className="justify-center flex flex-col items-center text-white w-full bg-cover h-[673px]"
        style={{ backgroundImage: "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4189.jpg?tr=w-1424,h-1346,fo-center')" }}
      >
        <div className="text-start font-semibold text-3xl">OEUVRE</div>
        <div className="text-start text-sm">WORK OF ART</div>
      </div>
      <div className="max-w-lg m-auto md:py-36 py-20 px-5">
        <div className="text-xs">asdsd</div>
        <div className="text-3xl font-bold my-2">Crafted for the discerning</div>
        <div className="">Founded on the belief that fashion is a canvas for self-expression, our mission is to showcase the intersection of luxury and art through every meticulously crafted piece.
        <br />
        <br />
        What sets us apart is our unwavering commitment to quality and craftsmanship. We are not just a clothing line; but an embodiment of sophistication, individuality, and a celebration of artistic expression.
</div>
        {/* <div className="text-[18px] font-bold mt-1">700 INR</div> */}
        {/* <div className="mt-5">
          <div className="gap-x-3 flex items-center">
            {data?.map((item: any, idx: number) => (
              <div
                key={idx}
                className={`cursor-pointer font-semibold border-b-2 ${
                  isActive === idx ? "border-b-black" : " border-b-transparent"
                }`}
                onClick={() => setIsActive(idx)}
              >
                {item?.tabName}
              </div>
            ))}
          </div>
          <div
            className="text-sm font-light mt-3 line-clamp-5 h-[100px]"
            tool-tip={data[isActive]?.tabContent}
          >
            {data[isActive]?.tabContent}
          </div>
        </div> */}
        <Button className="w-full bg-transparent mt-10 !rounded-full border-black border-2 !text-black hover:!text-white hover:!bg-black">
          Show your excitement!
        </Button>
      </div>
    </div>
  );
};

export default HouseWild;
