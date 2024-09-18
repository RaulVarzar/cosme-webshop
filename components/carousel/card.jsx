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

  // const variants = {
  //   hovering: {
  //     scale: 1.02,
  //     y: "-10px",
  //     transition: { delay: 0.5, duration: 0.12, type: "tween" },
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: "0px",
  //     transition: {
  //       type: "spring",
  //       damping: 5,
  //       mass: 0.2,
  //       stiffness: 120,
  //       delay: 0.35,
  //     },
  //   },
  // };

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
      animate={controls}
      className=" cursor-pointer relative w-full max-sm:max-w-sm max-w-xl h-full group rounded-3xl aspect-video"
    >
      <div className="absolute inset-0  group-hover:scale-x-[1.023] group-hover:scale-y-[1.03]  bg-base-100 rounded-[15px] transition-all duration-200" />
      <div className="overflow-hidden rounded-[11px] inset-0 w-full h-full">
        <motion.img
          animate={imgControls}
          transition={{ duration: 0.4 }}
          src={`/categories/${props.photo}`}
          className="object-cover h-full group-hover:aspect-square group-hover:scale-[1.03] w-full relative rounded-[12px] "
          alt=""
        />
      </div>
      <div className="absolute capitalize bottom-5 left-5 rounded-full bg-base-100 px-8 py-3 text-xl font-medium group-hover:text-2xl transition-all">
        {props.title}
      </div>
    </motion.div>
  );
});

export default Card;
