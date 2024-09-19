"use client";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const Collection = ({ data }) => {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);
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
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 12,
        delay: 0.2,
        mass: 0.2,
        stiffness: 90,
      },
    },
  };

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-25% 0%",
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["96%", "100%", "94%"]
  );
  return (
    <motion.div
      style={{ y, scale }}
      ref={ref}
      className={` w-full md:w-1/2  justify-center flex  ${
        data.id === 2 && "md:mt-60"
      }`}
      whileTap={{ scale: 0.96, translateY: "5px" }}
    >
      <motion.div
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        className="w-full md:w-fit px-8 rounded-2xl  cursor-pointer relative flex overflow-hidden md:flex-row py-8 flex-col lg:flex-row justify-center gap-6 items-center"
      >
        <AnimatePresence>
          {hovering && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2, delay: 0 }}
              exit={{ y: "100%" }}
              className="inset-0 absolute bg-base-200  h-full w-full -z-10"
            ></motion.div>
          )}
        </AnimatePresence>
        <img
          src={`collections/${data.photo}`}
          alt=""
          className="z-20  rounded-2xl  md:max-w-60 lg:max-w-80 xl:max-w-96 "
        />

        <motion.div
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center sm:items-start justify-start z-10 "
        >
          <motion.span className="text-md font-medium sm:text-md md:text-lg lg:text-xl opacity-40 ">
            Collection
          </motion.span>
          <motion.h2
            style={hovering ? { opacity: 1 } : { opacity: 0.8 }}
            className={`font-semibold text-base-content sm:text-xl text-xl md:text-2xl lg:text-3xl
            `}
          >
            {data.title}
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
