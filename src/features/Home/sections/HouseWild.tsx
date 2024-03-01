import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const HouseWild = () => {
  return (
    <motion.div
      viewport={{ once: false }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="grid md:grid-cols-2 bg-primary"
    >
      <motion.div
        viewport={{ once: false }}
        variants={HeroVariants.CARD_1}
        whileInView="show"
        initial="hidden"
        className="justify-center sm:flex hidden flex-col items-center text-white w-full bg-cover h-[673px]"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4189.jpg?tr=w-1424,h-1346,fo-center')",
        }}
      >
        <div className="text-start font-bold text-3xl">O E U V R E</div>
        <div className="text-start text-sm ">W O R K O F A R T</div>
      </motion.div>
      <motion.div
        viewport={{ once: false }}
        variants={HeroVariants.CARD_3}
        whileInView="show"
        initial="hidden"
        className="sm:max-w-lg m-auto md:py-36 relative py-20 px-5"
      >
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4189.jpg?tr=w-1424,h-1346,fo-center"
          height={500}
          width={500}
          alt=""
          isLocal
          className="absolute sm:hidden opacity-10 h-full w-full top-0 left-0 object-cover"
        />
        <div className="text-xs text-heading">Own the Future. Own Oeuvre.</div>
        <div className="text-3xl font-bold my-2 text-gradient">
          Crafted for the discerning
        </div>
        <div className="">
          Founded on the belief that fashion is a canvas for self-expression,
          our mission is to showcase the intersection of luxury and art through
          every meticulously crafted piece.
          <br />
          <br />
          What sets us apart is our unwavering commitment to quality and
          craftsmanship. We are not just a clothing line; but an embodiment of
          sophistication, individuality, and a celebration of artistic
          expression.
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
        <Button className="w-full mt-10">SHOP THE FIRST DROP</Button>
      </motion.div>
    </motion.div>
  );
};

export default HouseWild;
