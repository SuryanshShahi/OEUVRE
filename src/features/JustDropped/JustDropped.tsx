import DroppedCard from "@/shared/DroppedCard";
import { droppedData } from "@/utils/constant";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const JustDropped = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="container mx-auto text-white space-y-10 my-20 px-5"
    >
      <h1 className="md:text-5xl text-3xl text-gradient !bg-[linear-gradient(-45deg,rgb(255,255,255)_40%,rgb(114,114,103)_113%)]">
        JUST DROPPED
      </h1>
      <p className="md:text-2xl">
        Lorem ipsum dolor sit amet consectetur. Massa in in pharetra ornare
        velit mauris.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 !mt-20 justify-between gap-5">
        <div className="flex flex-col gap-5">
          <DroppedCard data={droppedData[0]} height={500} width={407} />
          <DroppedCard data={droppedData[1]} height={500} width={407} />
        </div>
        <DroppedCard data={droppedData[2]} height={1027} width={387} />
        <div className="md:flex hidden flex-col gap-5">
          <DroppedCard data={droppedData[3]} height={500} width={407} />
          <DroppedCard data={droppedData[4]} height={500} width={407} />
        </div>
        <DroppedCard
          data={droppedData[3]}
          height={500}
          width={407}
          className="md:hidden"
        />
        <DroppedCard
          data={droppedData[4]}
          height={500}
          width={407}
          className="md:hidden"
        />
        <DroppedCard
          data={droppedData[5]}
          className="sm:col-span-2"
          height={500}
          width={858}
        />
        <DroppedCard data={droppedData[6]} height={500} width={387} />
        <DroppedCard data={droppedData[7]} height={500} width={387} />
        <DroppedCard data={droppedData[8]} height={500} width={387} />
        <DroppedCard data={droppedData[9]} height={500} width={387} />
      </div>
    </motion.div>
  );
};

export default JustDropped;
