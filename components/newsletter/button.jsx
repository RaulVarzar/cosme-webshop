"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Button = () => {
  const variants = {
    hidden: {
      x: "30%",
      rotate: "-1deg",
      scale: "0.85",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: "0%",
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
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      transition={{
        type: "spring",
        duration: 0.15,
        damping: 8,
        delay: 0.35,
        mass: 0.4,
        stiffness: 80,
      }}
    >
      <button className="max-w-md btn btn-accent btn-outline max-sm:mx-auto">
        Subscribe
      </button>
    </motion.div>
  );
};
