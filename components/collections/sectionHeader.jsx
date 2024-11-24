"use client";
import {
  easeOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { Title } from "./title";
import { Description } from "./description";
import { useRef } from "react";

const linkVariants = {
  hidden: { opacity: 0, y: "80%" },
  visible: { opacity: [0, 0.2, 1], y: "0%" },
};

export const Header = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20vh", "0vh"]);

  const scale = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className="flex flex-col  justify-center w-full mx-auto sm:min-h-[70vh] gap-6 py-2 md:pl-2 lg:pl-6  text-center md:pr-6  md:text-right text-balance"
    >
      <Title />
      <Description />
      <motion.div
        variants={linkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut, delay: 1.2 }}
      >
        <Link href="/">
          <span
            className="border-b-2 px-0 py-2 pb-0.5 tracking-wider
            border-base-content text-base-content text-md font-semibold"
          >
            Shop all collections
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};
