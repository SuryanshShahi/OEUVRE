import { Variants } from "framer-motion";
export const HeroVariants: { [x: string]: Variants } = {
  CARD_1: {
    hidden: {
      opacity: 0,
      left: -200,
      position: "relative",
    },
    show: {
      left: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  CARD_2: {
    hidden: {
      opacity: 0,
      bottom: -200,
      position: "relative",
    },
    show: {
      bottom: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 1.2, staggerChildren: 0.5 },
    },
  },
  CARD_3: {
    hidden: {
      opacity: 0,
      right: -200,
      position: "relative",
    },
    show: {
      right: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.7, staggerChildren: 0.5 },
    },
  },
  SUNSHINE: {
    hidden: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    show: {
      opacity: 1,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      transition: { duration: 2, staggerChildren: 0.5 },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  },
};