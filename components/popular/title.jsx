"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Title = () => {
  const variants = {
    hidden: {
      y: "200%",
      x: "-5%",
      rotate: "6deg",
      scale: "0.9",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: "0%",
      x: 0,
      rotate: "0deg",
      scale: "1",
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-15% 0%",
  });

  return (
    <motion.h2
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      transition={{
        type: "spring",
        damping: 10,
        delay: 0.25,
        mass: 0.3,
        stiffness: 180,
      }}
      className="text-5xl font-bold sm:pl-10 max-xl:text-center text-neutral"
    >
      Popular
    </motion.h2>
  );
};
