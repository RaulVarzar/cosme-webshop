"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Categories = ({ data, selectedCategory, changeCategory }) => {
  const [hovering, setHovering] = useState(null);

  return (
    <ul className="flex grow  h-48 flex-row  gap-2 md:gap-4 w-full justify-evenly lg:gap-8">
      {data.map((category, i) => (
        <motion.li
          style={
            selectedCategory === i
              ? { scale: 1.15 }
              : hovering === i && { scale: 1.05 }
          }
          onHoverStart={() => setHovering(i)}
          onHoverEnd={() => setHovering(null)}
          className={`text-sm bg-base-200 w-1/4 flex items-center flex-col justify-center transition-all duration-300 rounded-lg sm:text-xl hover:cursor-pointer relative  ${
            selectedCategory === i ? "font-semibold " : "font-normal opacity-70"
          }`}
          key={i}
          onClick={() => changeCategory(i)}
        >
          <motion.img
            src={`/hero/${category.photo}`}
            alt=""
            className=" object-fit h-24"
            animate={hovering === i ? { scale: 1.2 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          />
          <span>{category.title}</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default Categories;
