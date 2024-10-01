import { motion } from "framer-motion";

export const SearchInput = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "-20px",
      transition: { delay: 0.5, duration: 0.12, type: "tween" },
    },
    visible: {
      opacity: 1,
      y: "0px",
      transition: {
        type: "spring",
        damping: 5,
        mass: 0.2,
        stiffness: 60,
        delay: 0.35,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={open ? "visible" : "hidden"}
      exit="hidden"
      className="w-full "
    >
      <label
        for="search"
        className="flex items-center justify-center w-full text-center border-base-content border-opacity-70 focus:border-opacity-100"
      >
        <input
          type="text"
          placeholder="search products..."
          className="px-2 py-1.5 text-lg bg-transparent text-center border-b-2 md:min-w-96 max-sm:w-full md:text-xl xl:text-2xl focus:outline-none"
        />
      </label>
    </motion.div>
  );
};
