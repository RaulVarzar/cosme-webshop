"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const Collection = ({ data }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });

  const contentSpring = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.01,
  });

  const y = useTransform(contentSpring, [0, 1], ["12vh", "0vh"]);

  return (
    <motion.div
      style={{ y }}
      ref={ref}
      className={`flex sm:max-md:flex-row flex-col lg:flex-row justify-center gap-6 items-center w-full md:w-1/2 hover:bg-base-200/80 rounded-md py-8 cursor-pointer transition-all group ${
        data.id === 2 && "md:mt-60"
      }`}
    >
      <div className="">
        <img
          src={`collections/${data.photo}`}
          alt=""
          className="ma-w-48 max-h-48 sm:max-w-60 max-w-fit sm:max-h-60 md:max-w-80 md:max-h-80 xl:max-w-96 xl:max-h-96 object-f"
        />
      </div>
      <div className="flex flex-col  items-start">
        <span className="text-sm sm:text-md md:text-lg lg:text-xl font-medium opacity-40 group-hover:opacity-75 transition-opacity">
          Collection
        </span>
        <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
          {data.title}
        </h2>
      </div>
    </motion.div>
  );
};
