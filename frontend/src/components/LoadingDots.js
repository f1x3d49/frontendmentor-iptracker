import { motion } from "framer-motion";
import React from "react";

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: "100%",
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const LoadingDots = () => {
  return (
    <motion.div
      className="flex items-center justify-center gap-6"
      variants={ContainerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.span
        className="block w-4 h-4 bg-vdgray rounded-full"
        variants={DotVariants}
        transition={DotTransition}
      ></motion.span>
      <motion.span
        className="block w-4 h-4 bg-vdgray rounded-full"
        variants={DotVariants}
        transition={DotTransition}
      ></motion.span>
      <motion.span
        className="block w-4 h-4 bg-vdgray rounded-full"
        variants={DotVariants}
        transition={DotTransition}
      ></motion.span>
    </motion.div>
  );
};

export default LoadingDots;
