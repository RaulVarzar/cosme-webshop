"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Card from "./card";
import { Title } from "./title";

const Carousel = () => {
  const ref = useRef(null);
  const bottomRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.05"],
  });

  const { scrollYProgress: totalScrollProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["95%", "100%"]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.6], ["15vh", "0vh"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["5vw", "5vw", "0vw"]
  );

  const y = useTransform(totalScrollProgress, [0, 1], ["0vh", "30vh"]);

  // const contentX = useTransform(scroll2, [0, 0.9], ["0%", "-100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ borderRadius, scale }}
      className="relative w-full min-h-screen py-20 bg-secondary"
    >
      <motion.div
        style={{ y }}
        className="flex flex-col items-center justify-center gap-4 py-16 mx-auto md:gap-8 w-fit"
      >
        <Title scrollYProgress={scrollYProgress} />

        <motion.div
          style={{ y: contentY }}
          className="z-10 flex items-center justify-center w-full px-2 py-12 mx-auto md:px-4 lg:px-6 max-w-8xl "
        >
          <div className="grid items-center justify-center h-full grid-cols-1 gap-3 pb-12 md:grid-cols-2 place-items-center sm:max-md:gap-y-6 md:gap-4 lg:gap-6 xl:gap-10 ">
            <Card ref={bottomRef} photo="eyes.jpeg" title="Eyes" />
            <Card ref={bottomRef} photo="lips.jpg" title="Lips" />
            <Card ref={bottomRef} photo="skin.jpg" title="skin" />
            <Card ref={bottomRef} photo="brushes.jpg" title="accessories" />
          </div>
        </motion.div>
      </motion.div>

      <div ref={bottomRef} className="h-0 " />
    </motion.div>
  );
};

export default Carousel;
