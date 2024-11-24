import { useInView, motion, useTransform } from "framer-motion";
import { useRef } from "react";

export const Title = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 0.6], ["35vh", "0vh"]);

  const variants = {
    hidden: {
      y: "10vh",
      x: "-1%",
      rotate: "-1deg",
      scale: "0.9",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: "0vh",
      x: 0,
      rotate: "0deg",
      scale: "1",
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-5% 0%",
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
      transition={{
        type: "spring",
        damping: 8,
        delay: 0.1,
        mass: 0.3,
        stiffness: 60,
      }}
    >
      <motion.h2
        style={{ y }}
        className="text-center text-4xl xl:text-5xl 2xl:text-6xl font-black text-base-100"
      >
        Categories
      </motion.h2>
    </motion.div>
  );
};
