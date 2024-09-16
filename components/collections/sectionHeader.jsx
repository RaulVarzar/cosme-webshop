"use client";
import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import { Title } from "./title";
import { Description } from "./description";

const linkVariants = {
  hidden: { opacity: 0, y: "80%" },
  visible: { opacity: [0, 0.2, 1], y: "0%" },
};

export const Header = () => {
  return (
    <div className="flex justify-center flex-col gap-6 md:w-5/12 pr-12 py-8 text-center md:text-left text-balance">
      <Title />
      <Description />
      <motion.div
        variants={linkVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
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
    </div>
  );
};
