import Button from "@/shared/Button/Button";
import { HeroVariants } from "@/utils/framerVariants";
import { motion } from "framer-motion";
import React from "react";

const NewsLetter = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      variants={HeroVariants.CONTAINER}
      whileInView="show"
      initial="hidden"
      className="bg-cover text-white text-center py-14 bg-pimary b-fixed px-5 !mt-0"
    >
      <div className="relative space-y-8">
        <div className="sm:text-[36px] text-3xl font-medium sm:leading-[50px] max-w-[900px] mx-auto text-gradient">
          Enroll and become a member of our website to unlock member benefits
          and access exclusive deals.
        </div>
        <div className="relative w-fit mx-auto">
          <form
            name="contact"
            method="POST"
            enctype="multipart/form-data"
            accept-charset="UTF-8"
            className="form u-mt-5 relative"
            onSubmit={(e) => {
              e.preventDefault();
              close();
            }}
            netlify
          >
            <div className="form_group">
              <input
                type="email"
                className="form__input outline-none rounded-full text-black pl-5 pr-[8rem] h-12 max-w-[512px] w-[calc(100vw-40px)]"
                placeholder="Enter Email"
                id="email"
                name="Email"
                required
              />
            </div>

            <button
              type="submit"
              className="py-[8px] rounded-full !px-11 absolute top-[2.5px] !text-white right-[2.5px] !bg-black"
            >
              Send
            </button>
            <input type="hidden" name="_gotcha" />
          </form>
        </div>
        <div>SIGN UP AND SAVE</div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
