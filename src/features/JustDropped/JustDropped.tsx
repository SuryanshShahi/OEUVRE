import DroppedCard from "@/shared/DroppedCard";
import { droppedData } from "@/utils/constant";
import { HeroVariants } from "@/utils/framerVariants";
import useScrollHidden from "@/utils/hooks/useScrollHidden";
import { motion } from "framer-motion";
import React, { useState } from "react";
import DroppedModal from "./compnents/DroppedModal";

const JustDropped = () => {
  const [isActive, setIsActive] = useState(-1);
  useScrollHidden(isActive !== -1);
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="container mx-auto text-white space-y-10 my-20 px-5"
    >
      <h1 className="md:text-5xl text-3xl text-gradient !bg-[linear-gradient(-45deg,rgb(255,255,255)_40%,rgb(114,114,103)_113%)]">
        SPRING-SUMMER 2024 COLLECTION
      </h1>
      <p className="md:text-2xl">
        Spring has sprung, and the Sunshine&apos;s calling! Shop the Just
        Dropped Collection, made in London with 100% premium cotton.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 !mt-20 justify-between sm:gap-5 gap-16">
        <div className="md:flex hidden flex-col sm:gap-5 gap-16">
          <DroppedCard
            data={droppedData[0]}
            height={450}
            width={407}
            onclick={() => setIsActive(0)}
            styleImage="h-[450px]"
          />
          <DroppedCard
            data={droppedData[1]}
            height={450}
            width={407}
            onclick={() => setIsActive(1)}
            styleImage="h-[450px]"
          />
        </div>
        <DroppedCard
          data={droppedData[0]}
          height={500}
          width={407}
          className="md:hidden"
          onclick={() => setIsActive(0)}
          styleImage="h-[450px]"
        />
        <DroppedCard
          data={droppedData[1]}
          height={500}
          width={407}
          className="md:hidden"
          onclick={() => setIsActive(1)}
          styleImage="h-[450px]"
        />
        <DroppedCard
          data={droppedData[2]}
          height={920}
          width={600}
          onclick={() => setIsActive(2)}
          className="sm:col-span-2"
          styleImage="h-[920px]"
        />
        <DroppedCard
          data={droppedData[5]}
          className="sm:col-span-2"
          height={500}
          width={858}
          onclick={() => setIsActive(5)}
          styleImage="h-[500px]"
        />
        <DroppedCard
          data={droppedData[6]}
          height={500}
          width={387}
          onclick={() => setIsActive(6)}
          styleImage="h-[500px]"
        />
        <DroppedCard
          data={droppedData[7]}
          height={500}
          width={387}
          onclick={() => setIsActive(7)}
          styleImage="h-[500px]"
        />
        <DroppedCard
          data={droppedData[8]}
          height={500}
          width={387}
          onclick={() => setIsActive(8)}
          styleImage="h-[500px]"
        />
        <DroppedCard
          data={droppedData[9]}
          height={500}
          width={387}
          onclick={() => setIsActive(9)}
          styleImage="h-[500px]"
        />
      </div>

      {isActive !== -1 && <DroppedModal close={() => setIsActive(-1)} />}
    </motion.div>
  );
};

export default JustDropped;
