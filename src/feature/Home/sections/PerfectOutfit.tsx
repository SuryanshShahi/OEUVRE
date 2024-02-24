import Img from "@/shared/Img";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const PerfectOutfit = () => {
  return (
    <motion.div
      viewport={{ once: false }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="relative bg-center py-20  px-5 bg-cover bg-fixed sm:bg-[url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4348.jpg')] bg-[url('https://ik.imagekit.io/designkrunch/Oeuvre/051A4348.jpg?tr=w-780,h-1404')] !mt-0"
    >
      <div className="bg-[rgb(0,0,0,0.6)] w-full h-full absolute left-0 top-0"></div>
      <p className="text-gradient md:text-4xl z-10 relative text-3xl text-center md:leading-[60px] leading-[50px] max-w-[1140px] mx-auto md:px-10">
        Elevate your style game to new heights with our exclusive collection.
        <br /> Each <span className="font-bold">garment</span>
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4221.jpg"
          alt="image"
          height={32}
          width={96}
          className="h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        tells a unique <span className="font-bold">story</span>, meticulously
        designed
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4326.jpg"
          alt="image"
          height={32}
          width={96}
          className="h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        to reflect the essence of modern
        <span className="font-bold"> luxury</span>
        <Img
          src="https://ik.imagekit.io/designkrunch/Oeuvre/051A4023.jpg"
          alt="image"
          height={32}
          width={96}
          className="h-10 inline-block rounded-full object-cover mx-2 my-3"
          isLocal
        />
        while embracing the beauty of artistic exploration.
      </p>
    </motion.div>
  );
};

export default PerfectOutfit;
