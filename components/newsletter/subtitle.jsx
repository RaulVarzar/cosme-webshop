"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

export const Subtitle = () => {
  const variants = {
    hidden: {
      y: "80%",
      scale: "0.85",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      rotate: "0deg",
      scale: "1",
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-12% 0%",
  });

  return (
    <div ref={ref} className="flex flex-col justify-center gap-0">
      <motion.p
        variants={variants}
        initial="hidden"
        animate={isInView && "visible"}
        transition={{
          type: "spring",
          damping: 13,
          delay: 0.5,
          mass: 0.6,
          stiffness: 50,
        }}
        className="font-medium"
      >
        Subscribe to our newsletter and get
      </motion.p>
      <motion.p
        variants={variants}
        initial="hidden"
        animate={isInView && "visible"}
        transition={{
          type: "spring",
          damping: 14,
          delay: 0.6,
          mass: 0.6,
          stiffness: 50,
        }}
        className="font-medium"
      >
        the latest updates and promotions
      </motion.p>
    </div>
  );
};
