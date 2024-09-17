"use client";
import Image from "next/image";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Card = ({
  category,
  name,
  photo,
  price,
  id,
  toggleHovering,
  hovering,
}) => {
  const cardVariants = {
    hidden: {
      x: "50%",
      scale: "0.95",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: "1",
    },
  };

  const categoryVariants = {
    hidden: {
      y: "-200%",
      scale: "0.8",
      opacity: 0,
      rotate: "-5deg",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: "1",
      rotate: 0,
    },
  };

  const nameVariants = {
    hidden: {
      y: "80%",
      scale: "0.95",
      opacity: 0,
      rotate: "1deg",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: "1",
      rotate: 0,
    },
  };

  const priceVariants = {
    hidden: {
      y: "-50%",
      scale: "0.95",
      opacity: 0,
      rotate: "1deg",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: "1",
      rotate: 0,
    },
  };

  const ref = useRef(null);

  // for triggering reveal animations when entering the viewport by 10%
  const isInView = useInView(ref, {
    margin: "-10% 0%",
  });

  const controls = useAnimationControls();
  const blurVariants = useAnimationControls();
  const imageControls = useAnimationControls();

  useEffect(() => {
    if (hovering === id) {
      controls.start({
        scale: 1.05,
      });
      blurVariants.start({
        scale: 1.0,
        y: "5px",
        opacity: 0.9,
      });
      imageControls.start({
        scale: 1.05,
      });
    } else {
      controls.start({ scale: 1 });
      blurVariants.start({
        scale: 1,
        y: 0,
        opacity: 1,
      });
      imageControls.start({
        scale: 1,
      });
    }
  }, [hovering]);

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => toggleHovering(id)}
      key={id}
      className="relative w-full max-w-sm mx-auto cursor-pointer"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView && "visible"}
        transition={{
          type: "spring",
          duration: 0.2,
          damping: 8,
          delay: 0.15 + id * 0.2,
          mass: 0.4,
          stiffness: 40,
        }}
        className="flex flex-col w-full h-full p-4 gap-2.5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-xl"
      >
        <motion.div
          animate={controls}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="relative w-full overflow-hidden grow aspect-4/5 rounded-xl "
        >
          <motion.img
            animate={imageControls}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            alt="placeholder"
            src={photo}
            className="rounded-xl"
          />
        </motion.div>
        <motion.div
          animate={blurVariants}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="flex flex-row items-end justify-between px-1"
        >
          <div className="flex flex-col items-start justify-start overflow-hidden ">
            <motion.span
              variants={categoryVariants}
              initial="hidden"
              animate={isInView && "visible"}
              transition={{
                type: "spring",
                duration: 0.2,
                damping: 8,
                delay: 0.35 + id * 0.2,
                mass: 0.4,
                stiffness: 40,
              }}
              className="text-sm font-medium text-neutral-content -z-10"
            >
              {category}
            </motion.span>
            <motion.p
              variants={nameVariants}
              initial="hidden"
              animate={isInView && "visible"}
              transition={{
                type: "spring",
                duration: 0.2,
                damping: 14,
                delay: 0.8 + id * 0.2,
                mass: 0.3,
                stiffness: 40,
              }}
              className="text-xl font-bold leading-6 text-base-content"
            >
              {name}
            </motion.p>
          </div>
          <motion.span
            variants={priceVariants}
            initial="hidden"
            animate={isInView && "visible"}
            transition={{
              type: "spring",
              duration: 0.2,
              damping: 14,
              delay: 1 + id * 0.2,
              mass: 0.3,
              stiffness: 40,
            }}
            className="text-lg font-semibold text-accent"
          >
            ${price}
          </motion.span>
        </motion.div>
      </motion.div>
      {hovering === id && (
        <motion.span
          layoutId="cards"
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-opacity-60 bg-base-200 rounded-xl -z-30"
        ></motion.span>
      )}
    </motion.div>
  );
};

export default Card;
