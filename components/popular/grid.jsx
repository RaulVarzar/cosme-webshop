"use client";
import { useState } from "react";
import Card from "./popularCard";
import { motion } from "framer-motion";

const Grid = ({ data }) => {
  const [hovering, setHovering] = useState(null);

  return (
    <motion.div
      onHoverEnd={() => setHovering(false)}
      className="grid items-stretch h-full grid-cols-1 gap-8 mx-auto  w-fit justify-items-stretch sm:grid-cols-2 xl:grid-cols-4 xl:px-3"
    >
      {data.map((item, i) => {
        return (
          <Card
            key={i}
            id={item.id}
            category={item.productCategory}
            name={item.productName}
            photo={item.photo}
            price={item.price}
            toggleHovering={setHovering}
            hovering={hovering}
          />
        );
      })}
    </motion.div>
  );
};

export default Grid;
