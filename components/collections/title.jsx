"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Title = () => {
  const variants = {
    hidden: {
      y: "80%",
      x: "-5%",
      rotate: "6deg",
      scale: "0.85",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
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

  // for hiding the element after leaving the viewport
  const leftView = useInView(ref, {
    margin: "5% 0%",
  });

  return (
    <motion.h2
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : !leftView && "hidden"}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 8,
        delay: 0.25,
        mass: 0.4,
        stiffness: 120,
      }}
      className="font-bold text-5xl text-neutral"
    >
      Collections
    </motion.h2>
  );
};
