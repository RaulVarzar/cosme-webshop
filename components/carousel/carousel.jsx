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

  const scale = useTransform(scrollYProgress, [0, 1], ["80%", "100%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.7], ["25vh", "0vh"]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.7], ["25vh", "0vh"]);

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["10vh", "10vh", "0vh"]
  );

  const y = useTransform(totalScrollProgress, [0, 1], ["0vh", "30vh"]);

  // const contentX = useTransform(scroll2, [0, 0.9], ["0%", "-100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ borderRadius, scale }}
      className="relative w-full bg-primary py-20 min-h-screen"
    >
      <motion.div
        style={{ y }}
        className="flex flex-col gap-4 md:gap-8 py-16 justify-center items-center w-fit mx-auto"
      >
        <Title y={titleY} />

        <motion.div
          style={{ y: contentY }}
          className="flex items-center px-2 md:px-4 lg:px-6 py-12 max-w-8xl  mx-auto justify-center z-10 w-full "
        >
          <div className="grid grid-cols-1 pb-12 md:grid-cols-2 place-items-center sm:max-md:gap-y-6 items-center justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-10 h-full ">
            <Card ref={bottomRef} photo="eyes.jpeg" title="Eyes" />
            <Card ref={bottomRef} photo="lips.jpg" title="Lips" />
            <Card ref={bottomRef} photo="skin.jpg" title="skin" />
            <Card ref={bottomRef} photo="brushes.jpg" title="accessories" />
          </div>
        </motion.div>
      </motion.div>

      <div ref={bottomRef} className=" h-0 " />
    </motion.div>
  );
};

export default Carousel;
