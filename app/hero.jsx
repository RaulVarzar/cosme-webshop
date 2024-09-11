// "use client";

import Image from "next/image";
// import { useState } from "react";

import { promises as fs } from "fs";

export default async function Hero() {
  const selectedCategory = 1;
  const file = await fs.readFile(process.cwd() + "/app/products.json", "utf8");
  const data = JSON.parse(file);

  return (
    <div className="flex flex-row min-h-[70vh] gap-4 w-full py-12 lg:py-16 xl:py-24">
      <div className="w-1/3 flex gap-8 flex-col items-start justify-center px-12 py-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-neutral capitalize">
          Featured
        </h2>
        <div className="h-10 w-0.5 bg-neutral"></div>
        <ul className="flex flex-col gap-4 lg:gap-8">
          {data.map((category, i) => (
            <li
              className={`text-xl hover:cursor-pointer relative transition-all ${
                selectedCategory === i
                  ? "font-semibold"
                  : "font-normal opacity-70"
              }`}
              key={i}
              //   onClick={() => setSelectedCategory(i)}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 flex flex-row justify-center items-center">
        <div className="w-1/2 relative h-full flex flex-col justify-end gap-4">
          <div className="h-full relative">
            <Image
              src={`/hero/${data[1].image}`}
              alt="heroImage"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <ul className="flex flex-row justify-center gap-8">
            {CATEGORIES.map((i) => (
              <li
                className={`rounded-full h-3  border-2 border-base-content transition-all ${
                  CATEGORIES[selectedCategory] === i
                    ? "bg-base-content w-6"
                    : "w-3"
                }`}
                key={i}
              />
            ))}
          </ul> */}
        </div>
        <div className="w-1/2 px-12 lg:px-16 xl:px-20">
          <span className="font-light text-base-content text-2xl">
            Limited edition
          </span>
          <h2 className="font-semibold text-neutral text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl max-w-80">
            Illuminating Face Primer
          </h2>
          <button className="btn btn-outline mt-4 px-10 text-xl font-bold">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
