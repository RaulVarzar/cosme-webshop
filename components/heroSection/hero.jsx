"use client";

import { useRef, useState } from "react";
import Categories from "./categories";
import FeaturedProduct from "./featuredProduct";
import { useScroll, useTransform, motion } from "framer-motion";

const DATA = [
  {
    id: 0,
    title: "Primers",
    photo: "hero3.png",
    featuredBrand: "fadeout",
    featuredProduct: "Brightening Moisturiser",
    link: "/#",
  },
  {
    id: 1,
    title: "Night Creams",
    photo: "hero1.png",
    featuredBrand: "Brand name",
    featuredProduct: "Illuminating face primer",
    link: "/#",
  },
  {
    id: 2,
    title: "Moisturisers",
    photo: "hero2.png",
    featuredBrand: "Omorovicza",
    featuredProduct: "Balancing Moisturiser",
    link: "/#",
  },
  {
    id: 3,
    title: "Day Creams",
    photo: "hero3.png",
    featuredBrand: "Brand name",
    featuredProduct: "Lorem Ipsum",
    link: "/#",
  },
];

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-8vh"]);
  const opacity = useTransform(scrollYProgress, [0.99, 1], ["100%", "0%"]);

  return (
    <>
      <motion.div
        style={{ y, scale, opacity }}
        className="flex flex-col -z-0 sticky items-center justify-center pt-[10vh] pb-[5vh] top-[0vh]  w-full  min-h-[100vh] h-full  mx-auto "
      >
        <div className="flex flex-col gap-4 w-full  max-w-8xl  h-full max-h-[90vh]">
          <div className="flex  flex-col items-center justify-center w-full grow sm:flex-row">
            <FeaturedProduct data={DATA} selectedCategory={selectedCategory} />
          </div>

          <div className="flex flex-row gap-8">
            <div className=" flex flex-col gap-2  items-start justify-start ">
              <motion.h2 className="text-xl font-bold uppercase tracking-wider md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl text-neutral">
                Featured
              </motion.h2>
              <button className=" whitespace-nowrap text-xl font-semibold px-6 py-2 rounded-md border-accent border-2">
                All products
              </button>
            </div>

            <div className="flex  flex-col items-center justify-center w-full gap-2 px-12  sm:gap-4 lg:gap-8 md:items-start">
              {/* <div className="md:h-10 md:w-0.5 h-0.5 w-10 bg-neutral"></div> */}
              <Categories
                data={DATA}
                selectedCategory={selectedCategory}
                changeCategory={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <div ref={ref} className="h-0 "></div>
    </>
  );
}
