import { Variants } from "framer-motion";
export const HeroVariants: { [x: string]: Variants } = {
  CARD_1: {
    hidden: {
      opacity: 0.5,
      left: -50,
      position: "relative",
    },
    show: {
      left: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  CARD_2: {
    hidden: {
      opacity: 0,
      bottom: -75,
      position: "relative",
    },
    show: {
      bottom: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5 },
    },
  },
  CARD_3: {
    hidden: {
      opacity: 0.5,
      right: -75,
      position: "relative",
    },
    show: {
      right: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
  SUNSHINE: {
    hidden: {
      opacity: 0.5,
      width: 0,
    },
    show: {
      opacity: 1,
      width: "100%",
      transition: { duration: 2, ease: "easeInOut" },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  },
};
