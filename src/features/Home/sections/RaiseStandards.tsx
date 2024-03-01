import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const RaiseStandards = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="space-y-10 sm:mt-20 mt-10 max-w-[1140px] mx-auto px-5"
    >
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl font-bold leading-[60px] text-gradient">
          Enhance your style prowess
        </div>
        <p className="text-secondary">
          At Oeuvre, we believe in making a statement beyond fashion. Our
          collections are curated to inspire confidence, provoke thought, and
          ignite a sense of cultural evolution.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:text-start text-center sm:justify-between justify-center items-center gap-5 !mt-8">
        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_1}
          whileInView="show"
          initial="hidden"
          className="sm:max-w-[250px] max-w-[300px] space-y-1"
        >
          <img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4374.jpg?tr=h-600"
            className="rounded-2xl sm:h-[300px] h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            Oeuvre is more than a brand
          </div>
          <div className="text-xs">It&apos;s a community</div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_2}
          whileInView="show"
          initial="hidden"
          className="max-[1024px]:order-last max-[640px]:order-none rounded-2xl card-type-2 gap-2 justify-center flex flex-col items-center text-white h-[400px] w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4201.jpg?tr=w-560,h-400,l-image,i-ik_canvas,bg-00000030,w-560,h-400,l-end')",
          }}
        >
          <div className="font-semibold text-3xl">O E U V R E</div>
          <div className="text-sm">W O R K O F A R T</div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_3}
          whileInView="show"
          initial="hidden"
          className="sm:max-w-[250px] max-w-[300px] space-y-1"
        >
          <img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4131.jpg?tr=h-600"
            className="rounded-2xl sm:h-[300px] h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            Oeuvre is about pushing boundaries
          </div>
          <div className="text-xs">and owning your individuality</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RaiseStandards;
