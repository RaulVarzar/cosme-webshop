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
    offset: ["center end", "center start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["30vh", "0vh", "0vh", "-30vh"]
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
    margin: "0% 0% -40% 0%",
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["90%", "100%", "95%"]
  );
  const titleX = useTransform(scrollYProgress, [0, 0.4], ["-200%", "0%"]);

  return (
    <motion.div
      style={{ scale }}
      className={` w-full  items-center justify-center flex ${
        data.id == 3 ? "h-fit" : "sm:min-h-[70vh]"
      }`}
    >
      <motion.div
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        whileTap={{ scale: 0.96, translateY: "5px" }}
        ref={ref}
        className="relative flex flex-col  items-center justify-center w-full h-fit gap-6 px-8 py-3 overflow-hidden cursor-pointer sm:py-6 md:py-8 md:w-fit rounded-2xl md:flex-row lg:flex-row"
      >
        <AnimatePresence>
          {hovering && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0" }}
              transition={{ duration: 0.2, delay: 0 }}
              exit={{ y: "100%" }}
              className="absolute inset-0 w-full h-full bg-base-200 -z-10"
            ></motion.div>
          )}
        </AnimatePresence>
        <motion.img
          src={`collections/${data.photo}`}
          alt={data.photo}
          className="z-20 rounded-2xl md:max-w-60 lg:max-w-80 xl:max-w-xl "
        />

        <motion.div
          variants={variants}
          animate={isInView ? "visible" : "hidden"}
          // style={{ x: titleX }}
          className="z-10 flex flex-col items-center justify-start sm:items-start "
        >
          <motion.span className="font-medium text-md sm:text-md md:text-lg lg:text-xl opacity-40 ">
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
