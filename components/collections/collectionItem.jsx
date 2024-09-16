"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Collection = ({ data }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    ["15vh", "0vh", "0vh", "-10vh"]
  );

  const variants = {
    hidden: {
      x: "-200%",
      scale: "0.4",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: "0%",
      scale: "1",
    },
  };

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-25% 0%",
  });

  // for hiding the element after leaving the viewport
  const leftView = useInView(ref, {
    margin: "5% 0%",
  });

  return (
    <motion.div
      style={{ y }}
      ref={ref}
      className={`flex sm:max-md:flex-row flex-col lg:flex-row justify-center gap-6 items-center w-full md:w-1/2 hover:bg-base-200/80 rounded-xl py-8 cursor-pointer group ${
        data.id === 2 && "md:mt-60"
      }`}
    >
      <div>
        <img
          src={`collections/${data.photo}`}
          alt=""
          className="ma-w-48 max-h-48 z-50 rounded-xl sm:max-w-60 max-w-fit sm:max-h-60 md:max-w-80 md:max-h-80 xl:max-w-96 xl:max-h-96 object-f"
        />
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : !leftView && "hidden"}
        transition={{
          type: "spring",
          duration: 0.5,
          damping: 12,
          delay: 0.2,
          mass: 0.2,
          stiffness: 90,
        }}
        className="flex flex-col -z-20 group-hover:z-20 items-start"
      >
        <span className="text-sm sm:text-md md:text-lg lg:text-xl font-medium opacity-40 group-hover:opacity-75">
          Collection
        </span>
        <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold opacity-70 group-hover:opacity-100">
          {data.title}
        </h2>
      </motion.div>
    </motion.div>
  );
};
