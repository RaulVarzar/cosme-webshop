"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Input = () => {
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
        delay: 0.2,
        mass: 0.4,
        stiffness: 70,
      }}
    >
      <label className="flex items-center w-full max-w-md gap-2 input input-bordered max-sm:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" className="grow" placeholder="Email" />
      </label>
    </motion.div>
  );
};
