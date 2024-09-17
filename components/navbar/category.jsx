"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export const Category = ({ title, categories }) => {
  const [hovering, setHovering] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold uppercase cursor-pointer opacity-80 hover:opacity-100 hover:underline underline-offset-2 text-base-content">
        {title}
      </h2>
      <ul className="flex flex-col gap-2.5 ml-3 text-xl font-medium text-neutral-content">
        {categories.map((item, i) => {
          const variants = {
            notHovering: {
              x: 0,
              opacity: 0.6,
            },
            hovering: {
              opacity: 1,
              x: "14px",
            },
          };

          const dotVariants = {
            hidden: {
              x: "-4px",
              opacity: 0,
              y: "-8px",
              width: "0px",
            },
            visible: {
              opacity: 1,
              x: "0px",
              y: "-8px",
              width: "4px",
            },
          };
          return (
            <motion.li
              onHoverStart={() => setHovering(item)}
              onHoverEnd={() => setHovering(null)}
              className="relative capitalize cursor-pointer "
            >
              <motion.span
                animate={hovering === item ? "hovering" : "notHovering"}
                className={`block  ${
                  hovering === item ? " text-accent" : "text-base-content"
                }`}
                variants={variants}
              >
                {item}
              </motion.span>

              <motion.span
                variants={dotVariants}
                animate={hovering === item ? "visible" : "hidden"}
                className="absolute left-0 h-4 rounded-full top-1/2 bg-accent"
              />
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};
