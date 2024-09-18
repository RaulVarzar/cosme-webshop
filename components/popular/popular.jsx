"use client";
import { useRef } from "react";
import Grid from "./grid";
import { Title } from "./title";
import { useScroll, useTransform, motion } from "framer-motion";

const POPULAR = [
  {
    id: 0,
    productCategory: "Blush Sticks",
    productName: "Blush Pop",
    price: 39.99,
    photo: "/popular/popular1.jpg",
  },
  {
    id: 1,
    productCategory: "Highlighters",
    productName: "Face Duo",
    price: 14.99,
    photo: "/popular/popular2.jpg",
  },
  {
    id: 2,
    productCategory: "Highlighters",
    productName: "Halo Glow",
    price: 32.99,
    photo: "/popular/popular3.jpg",
  },
  {
    id: 3,
    productCategory: "Eye Gels",
    productName: "Eye Do All Things",
    price: 29.99,
    photo: "/popular/popular4.jpg",
  },
];

const Popular = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.4"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["15vh", "0vh"]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="flex mx-auto flex-col w-full gap-8 py-12 text-5xl md:gap-12 xl:gap-24 lg:pt-32 xl:pt-40 max-w-8xl h-fit "
    >
      <Title />
      <Grid data={POPULAR} />
    </motion.div>
  );
};

export default Popular;
