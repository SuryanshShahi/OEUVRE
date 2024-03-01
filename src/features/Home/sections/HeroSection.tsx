import Img from "@/shared/Img";
import React from "react";
import { motion } from "framer-motion";
import { HeroVariants } from "@/utils/framerVariants";
import { useRouter } from "next/router";
const HeroSection = () => {
  const router = useRouter();
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="space-y-10 md:mt-20 mt-10 max-w-[1250px] mx-auto px-5 pb-28"
    >
      <div className="text-center max-w-[850px] mx-auto space-y-4">
        <div className="text-5xl leading-[60px] text-gradient">
          Experience the Epitome of Luxury, Where Fashion Meets Art
        </div>
        <p className="text-secondary">
          Indulge in the fusion of luxury and artistry with Oeuvre - a testament
          to the confluence of fashion, creativity, and individuality.
        </p>
      </div>
      <div className="flex max-[1024px]:flex-wrap sm:justify-between justify-center items-center gap-5 !mt-8">
        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_1}
          whileInView="show"
          initial="hidden"
          className="card-type-2 animate-pulse relative space-y-2 p-4 text-white h-[400px] rounded-2xl bg-cover w-full max-w-[300px]"
        >
          <Img
            src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4050.jpg?tr=w-600"
            alt="image"
            height={400}
            width={300}
            isLocal
            className="absolute h-full opacity-30 rounded-2xl w-full top-0 left-0"
          />
          <div className="text-2xl font-medium">Exquisite Collection</div>
          <p className="text-sm">
            Meticulously curated with precision for those with a penchant for
            luxury.
          </p>
          <div
            className="text-xl bottom-3 right-8 absolute"
            onClick={() => router.push("/dropped")}
          >
            Shop Soon
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_2}
          whileInView="show"
          initial="hidden"
          className="card-type-1 max-[1024px]:order-last max-[640px]:order-none h-[400px] rounded-2xl bg-cover w-full"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4361.jpg')",
          }}
        ></motion.div>
        <motion.div
          viewport={{ once: true }}
          variants={HeroVariants.CARD_3}
          whileInView="show"
          initial="hidden"
          className="rounded-2xl h-[400px] flex flex-col items-center justify-center text-white bg-cover w-full sm:max-w-[250px] max-w-[300px]"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/designkrunch/Oeuvre/051A3965.jpg?tr=w-600')",
          }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
