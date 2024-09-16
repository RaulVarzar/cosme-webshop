"use client";
import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Description = () => {
  const childrenVariants = {
    hidden: {
      y: "50%",
      scale: "0.85",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: "0%",
      scale: "1",
      transition: { damping: 10, stiffness: 50 },
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-20% 0%",
  });

  // for hiding the element after leaving the viewport
  const leftView = useInView(ref, {
    margin: "5% 0%",
  });

  return (
    <motion.div
      ref={ref}
      //   variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : !leftView && "hidden"}
      transition={{
        duration: 2,
        damping: 10,
        delay: 5,
        mass: 0.1,
        stiffness: 50,
        staggerChildren: 0.2,
      }}
      className="flex justify-center sm:justify-left flex-col font-medium opacity-50 text-sm sm:text-md text-base-content"
    >
      <motion.span variants={childrenVariants}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </motion.span>
      <motion.span variants={childrenVariants}>
        Commodi, expedita, optio at rerum sunt accusantium,
      </motion.span>
      <motion.span variants={childrenVariants}>
        debitis ea incidunt culpa vero soluta enim. Reiciendis
      </motion.span>
      <motion.span variants={childrenVariants}>
        alias, nulla excepturi totam quas laudantium aut!
      </motion.span>
    </motion.div>
  );
};
