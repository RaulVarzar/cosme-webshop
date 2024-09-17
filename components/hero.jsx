"use client";

import Image from "next/image";
import { useState } from "react";
import Categories from "./heroSection/categories";
import FeaturedProduct from "./heroSection/featuredProduct";

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
    photo: "hero.png",
    featuredBrand: "Brand name",
    featuredProduct: "Lorem Ipsum",
    link: "/#",
  },
];

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="flex flex-col py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="flex flex-col md:flex-row min-h-[70vh] gap-4 w-full pb-8 lg:pb-12 xl:pb-16">
        <div className="flex flex-col items-center justify-center w-full gap-2 px-12 py-8 md:w-1/3 sm:gap-4 lg:gap-8 md:items-start">
          <h2 className="text-xl font-semibold capitalize md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-neutral">
            Featured
          </h2>
          <div className="md:h-10 md:w-0.5 h-0.5 w-10 bg-neutral"></div>
          <Categories
            data={DATA}
            selectedCategory={selectedCategory}
            changeCategory={setSelectedCategory}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-2/3 sm:flex-row">
          <FeaturedProduct data={DATA} selectedCategory={selectedCategory} />
        </div>
      </div>
      <ul className="flex flex-row justify-center gap-8">
        {DATA.map((i) => (
          <li
            className={`rounded-full h-3  border-2 border-base-content transition-all ${
              DATA[selectedCategory] === i ? "bg-base-content w-5" : "w-3"
            }`}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
