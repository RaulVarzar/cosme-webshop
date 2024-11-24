"use client";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function Card({ ...props }) {
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
      className="relative w-full h-full max-w-xl cursor-pointer max-sm:max-w-sm group rounded-3xl aspect-video"
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
      <div className="absolute px-5 py-1.5 text-xl font-medium capitalize transition-all duration-300  border-2 md:border-4 md:py-3 bottom-3 left-3 rounded-xl md:rounded-2xl group-hover:bg-base-100 text-base-100 group-hover:text-base-content border-base-100 md:px-8">
        {props.title}
      </div>
    </motion.div>
  );
}
