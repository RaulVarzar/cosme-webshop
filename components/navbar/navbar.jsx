"use client";

import { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import Link from "next/link";

import { Cart } from "../shoppingCart/sideBar";

import { IoSearch } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Submenu } from "./subMenu";

const Navbar = () => {
  const { scrollY } = useScroll();

  // Shrink navbar on scroll
  const [hidden, setHidden] = useState(false);
  function update() {
    if (scrollY?.current < 150) {
      setHidden(false);
    } else if (scrollY?.current >= 150) {
      setHidden(true);
      setOpenSubmenu(false);
    }
  }
  useEffect(() => {
    return scrollY.on("change", () => update());
  });

  // Show/hide shopping cart
  const [isOpen, setIsOpen] = useState(false);

  // Show-hide subment
  const [openSubmenu, setOpenSubmenu] = useState(false);

  function toggleSubmenu() {
    if (openSubmenu) {
      setOpenSubmenu(false);
    } else {
      setOpenSubmenu(true);
    }
  }

  return (
    <motion.nav
      layout
      className={`w-full h-auto top-0 inset-x-0 fixed mx-auto flex flex-col overflow-hidden  bg-base-100 rounded-b-xl z-50 
         ${hidden ? "max-w-6xl shadow" : " max-w-8xl"} `}
    >
      <motion.div
        layout="position"
        className={`flex justify-center w-full items-center mx-auto px-4 py-3 sm:py-4 md:py-6 bg-base-100 `}
      >
        <motion.div
          layout
          className="flex items-center w-1/6 gap-4 justify-evenly"
        >
          <span
            onClick={() => toggleSubmenu()}
            className="relative opacity-80 hover:opacity-100 flex flex-col gap-2 p-3 cursor-pointer "
          >
            <span
              className={`w-8 h-1 bg-neutral rounded-full  top-4 left-3 transition-all ${
                openSubmenu && "rotate-45 translate-y-1"
              }`}
            ></span>
            <span
              className={` h-1 rounded-full bg-neutral  top-6 left-3 transition-all ${
                openSubmenu ? "w-8 -rotate-45 -translate-y-2" : "w-5"
              }`}
            ></span>
          </span>
          <IoSearch className="mx-8 text-3xl transition-opacity cursor-pointer max-sm:hidden  text-neutral opacity-80 hover:opacity-100" />
        </motion.div>

        <motion.h1
          layout="position"
          className={`font-bold transition-all duration-500 tracking-wide text-neutral  grow text-center ${
            hidden ? "text-3xl" : "text-5xl"
          }`}
        >
          cosme
        </motion.h1>

        <motion.div
          layout="position"
          className="flex items-center  w-1/6 gap-4 justify-evenly"
        >
          <Link
            href="/account"
            className="text-3xl font-semibold text-center transition-opacity text-neutral hover:cursor-pointer max-sm:hidden opacity-80 hover:opacity-100 "
          >
            <FaRegUser />
          </Link>
          <motion.div whileTap={{ scale: 0.9 }}>
            <MdShoppingBasket
              onClick={() => setIsOpen(!openSubmenu)}
              className="text-4xl transition-opacity text-neutral hover:cursor-pointer opacity-80 hover:opacity-100"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      {openSubmenu && <Submenu openSubmenu={openSubmenu} />}
      {isOpen && <Cart isOpen={isOpen} toggle={() => setIsOpen(false)} />}
    </motion.nav>
  );
};

export default Navbar;
