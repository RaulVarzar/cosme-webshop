"use client";

import { useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY?.current < 50) {
      setHidden(false);
    } else if (scrollY?.current > 50) {
      setHidden(true);
    }
  }
  useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <nav
      className={`w-full top-0 left-0 bg-base-100 sticky z-50 transition-all duration-500 ${
        hidden ? "py-3 shadow-sm" : "py-8"
      }`}
    >
      <div
        className={`flex justify-center transition-all duration-500 items-center mx-auto ${
          hidden ? "max-w-7xl" : "max-w-8xl"
        }`}
      >
        <div className="flex gap-4 w-1/6 justify-center items-center">
          <span className="bg-neutral relative rounded-full h-11 w-11">
            <span className="w-5 h-0.5 bg-base-200 rounded-full absolute top-4 left-3"></span>
            <span className="w-5 h-0.5 rounded-full bg-base-200 absolute top-6 left-3"></span>
          </span>
          <IoSearch className="text-3xl max-sm:hidden mx-8 grow text-neutral" />
        </div>

        <h1
          className={`font-bold transition-all duration-500 tracking-wide text-neutral grow text-center ${
            hidden ? "text-3xl" : "text-5xl"
          }`}
        >
          cosme
        </h1>

        <div className="gap-4 w-1/6 flex items-center justify-center">
          <Link
            href="/account"
            className="grow max-sm:hidden text-center font-semibold opacity-80 hover:opacity-100 text-neutral transition-all"
          >
            ACCOUNT
          </Link>
          <MdShoppingBasket className="text-4xl text-neutral transition-all hover:cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
