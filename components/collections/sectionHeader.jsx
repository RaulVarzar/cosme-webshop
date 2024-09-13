"use client";
import { easeInOut, easeOut, motion } from "framer-motion";
import Link from "next/link";

const titleVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const subVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: [0, 0.4, 1], y: 0 },
};

export const Header = () => {
  return (
    <div className="flex justify-center flex-col gap-6 md:w-5/12 pr-12 py-8 text-center md:text-left text-balance">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOut, delay: 0.25 }}
        className="font-bold text-5xl text-neutral"
      >
        Collections
      </motion.h2>
      <motion.p
        variants={subVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: easeOut, delay: 0.4 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        expedita, optio at rerum sunt accusantium, debitis ea incidunt culpa
        vero soluta enim. Reiciendis alias, nulla excepturi totam quas
        laudantium aut!
      </motion.p>
      <motion.div
        variants={linkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeOut, delay: 0.8 }}
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
