"use client";
import { forwardRef, useEffect, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useAnimationControls,
} from "framer-motion";

const Card = forwardRef(function (props, ref) {
  const [hovering, setHovering] = useState(false);

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "85%"]);

  const controls = useAnimationControls();
  const imgControls = useAnimationControls();

  useEffect(() => {
    if (hovering) {
      controls.start({
        scale: 1.02,
      });
      imgControls.start({
        scale: 1.05,
      });
    } else {
      controls.start({
        scale: 1,
      });
      imgControls.start({
        scale: 1.0,
      });
    }
  }, [hovering]);

  return (
    <motion.div
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      whileTap={{ scale: 0.96 }}
      animate={controls}
      className=" cursor-pointer relative w-full max-sm:max-w-sm max-w-xl h-full group rounded-3xl aspect-video"
    >
      <div className="absolute inset-0  group-hover:scale-x-[1.023] group-hover:scale-y-[1.03]  bg-base-100 rounded-[15px] transition-all duration-200" />
      <div className="overflow-hidden rounded-[11px] inset-0 w-full h-full">
        <motion.img
          animate={imgControls}
          transition={{ duration: 0.4 }}
          src={`/categories/${props.photo}`}
          className="object-cover h-full group-hover:blur-[2px] group-hover:aspect-square group-hover:scale-[1.03] w-full relative rounded-[12px] "
          alt=""
        />
      </div>
      <div className="absolute capitalize bottom-3 left-3 rounded-2xl border-4 group-hover:bg-base-100 text-base-100 group-hover:text-base-content border-base-100 px-8 py-3 text-xl font-medium  duration-300 transition-all">
        {props.title}
      </div>
    </motion.div>
  );
});

export default Card;
