"use client";
import { motion, spring, easeOut, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 1,
    x: "100%",
    transition: { type: spring, damping: 1, duration: 0.2 },
  },
  visible: {
    opacity: 1,
    x: "-5%",
    transition: { type: spring, damping: 25, duration: 0.4, ease: easeOut },
  },
};

export const Cart = ({ isOpen, toggle }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed  top-0 left-0 h-screen z-10 w-full transition-all bg-base-100 bg-opacity-40  backdrop-blur-lg  backdrop-contrast-75`}
            onClick={toggle}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        variants={variants}
        animate={isOpen ? "visible" : "hidden"}
        className="fixed top-[2vh] right-0 h-[96vh] rounded-lg z-50 bg-base-100 w-96 flex  flex-col items-center justify-center text-base-content text-3xl font-black overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          SHOPPING CART
        </motion.h1>
      </motion.div>
    </>
  );
};
