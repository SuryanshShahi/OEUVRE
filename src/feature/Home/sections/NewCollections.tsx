import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const NewCollections = () => {
  return (
    <motion.div
      viewport={{ once: false }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="text-center space-y-4 max-w-[1024px] mx-auto px-5"
    >
      <div className="text-5xl leading-[60px] text-gradient">Our Inaugral Line</div>
      <p className="text-secondary max-w-[800px] mx-auto">
        From concept to creation, we prioritize precision, ensuring that every
        stitch, fabric, and detail contributes to a masterpiece that stands the
        test of time.
      </p>
      <div className="flex max-[1024px]:flex-wrap sm:text-start text-center sm:justify-between !justify-center items-center gap-5 !mt-8">
        <motion.div
          viewport={{ once: false }}
          variants={HeroVariants.CARD_1}
          whileInView="show"
          initial="hidden"
          className="max-w-[300px]"
        >
          <img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A3934.jpg?tr=w-600"
            className="rounded-3xl h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">
            Where Art Meets Apparel
          </div>
          <div className="text-xs">Unveil the Oeuvre Masterpiece.</div>
        </motion.div>

        <motion.div
          viewport={{ once: false }}
          variants={HeroVariants.CARD_2}
          whileInView="show"
          initial="hidden"
          className="max-w-[350px] max-[1024px]:order-last max-[640px]:order-none rounded-3xl card-type-2 gap-2 justify-center flex flex-col items-center text-white h-[430px] w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4080.jpg?tr=h-860')",
          }}
        >
          <div className="font-semibold text-3xl">O E U V R E</div>
          <div className="text-sm">W O R K O F A R T</div>
        </motion.div>

        <motion.div
          viewport={{ once: false }}
          variants={HeroVariants.CARD_3}
          whileInView="show"
          initial="hidden"
          className="max-w-[300px]"
        >
          <img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4304.jpg?tr=w-600"
            className="rounded-3xl h-[350px] w-full object-cover"
          />
          <div className="font-semibold text-[18px]">Limited Edition Drops</div>
          <div className="text-xs">Curated Luxury Streetwear.</div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewCollections;
