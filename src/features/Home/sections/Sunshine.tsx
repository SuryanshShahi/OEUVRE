import Img from "@/shared/Img";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const Sunshine = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="relative bg-prmary py-20 overflow-hidden"
    >
      <div className="text-center space-y-4">
        <div className="text-5xl leading-[60px] font-bold text-gradient">
          Luxury that blends with comfort
        </div>
        <p className="text-secondary max-w-[800px] mx-auto">
          Crafted with the finest materials, our clothing offers unparalleled
          breathability, ensuring you feel at ease in any setting.
        </p>
        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.SUNSHINE}
          whileInView="show"
          initial="hidden"
          className="overflow-hidden"
        >
          <div className="flex py-7 -ml-10 max-[640px]:overflow-x-scroll justify-center">
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4176.jpg?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-12"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4148.jpg?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4214.jpg?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4058.jpg?updatedAt=1708690283637?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
              height={280}
              width={220}
              isLocal
            />

            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A3985.jpg?updatedAt=1708690272320?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[22deg] -ml-5 mt-3"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4261.jpg?updatedAt=1708690308252?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-6 -ml-5"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4370.jpg?updatedAt=1708690318130?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[15deg] -ml-5 mt-3"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4118.jpg?updatedAt=1708690286939?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl rotate-[20deg] -ml-5 mt-3"
              height={280}
              width={220}
              isLocal
            />
            <Img
              src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4167.jpg?updatedAt=1708690262795?tr=w-440"
              alt="image"
              className="h-[280px] w-[220px] object-cover rounded-2xl -rotate-[20deg] -ml-10 mt-3"
              height={280}
              width={220}
              isLocal
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sunshine;
