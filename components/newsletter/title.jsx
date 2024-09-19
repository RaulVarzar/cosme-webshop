"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Title = () => {
  const variants = {
    hidden: {
      y: "80%",
      rotate: "3deg",
      scale: "0.85",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotate: "0deg",
      scale: "1",
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-10% 0%",
  });

  return (
    <motion.h2
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      transition={{
        type: "spring",
        duration: 0.15,
        damping: 8,
        delay: 0.25,
        mass: 0.4,
        stiffness: 100,
      }}
      className="font-bold text-xl md:text-2xl lg:text-4xl text-neutral"
    >
      NEWSLETTER
    </motion.h2>
  );
};
