import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex flex-row w-full justify-around items-center max-w-7xl gap-x-12 py-10 md:py-12 lg:py-16 xl:py-20 border-t-1 mt-2 md:mt-4 lg:mt-8 xl:mt-12">
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 max-w-sm">
        <h2 className="font-bold text-lg md:text-2xl lg:text-4xl text-neutral">
          NEWSLETTER
        </h2>
        <p className="font-medium">
          Subscribe to our newsletter and get the latest updates and promotions
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 grow justify-center">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="btn btn-accent btn-outline">Subscribe</button>
      </div>
    </div>
  );
};
