import Button from "@/shared/Button/Button";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const NewsLetter = () => {
  return (
    <motion.div
      viewport={{ once: false }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="bg-cover text-white text-center py-14 bg-primary b-fixed px-5 !mt-0"
    >
      <div className="relative space-y-8">
        <div className="sm:text-[36px] text-3xl font-medium sm:leading-[50px] max-w-[900px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </div>
        <div className="relative w-fit mx-auto">
          <Button className="py-[10px] !px-11 absolute top-[1px] !text-white right-0 !bg-black">
            Send
          </Button>
          <input
            className="outline-none rounded-full text-black pl-5 pr-[8rem] h-12 max-w-[512px] w-[calc(100vw-40px)]"
            placeholder="Enter Email"
          />
        </div>
        <div>asdasdsad asd dadasd</div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
