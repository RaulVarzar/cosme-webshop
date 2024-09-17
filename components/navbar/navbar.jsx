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
    if (scrollY?.current < 50) {
      setHidden(false);
    } else if (scrollY?.current >= 50) {
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
    <motion.div
      layout="preserve-aspect"
      className="sticky top-0 left-0 z-50 flex flex-col w-full h-auto "
    >
      <motion.nav
        layout="size"
        className={`w-full top-0 left-0 bg-base-100 sticky z-50 
         ${hidden ? "py-6 shadow-sm" : "py-6"} `}
      >
        <div
          className={`flex justify-center  items-center mx-auto ${
            hidden ? "max-w-7xl" : "max-w-8xl"
          }`}
        >
          <motion.div
            layout
            className="flex items-center w-1/6 gap-4 justify-evenly"
          >
            <span
              onClick={() => toggleSubmenu()}
              className="relative rounded-full cursor-pointer bg-neutral h-11 w-11"
            >
              <span
                className={`w-5 h-0.5 bg-base-200 rounded-full absolute top-4 left-3 transition-all ${
                  openSubmenu && "rotate-45 translate-y-1"
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 rounded-full bg-base-200 absolute top-6 left-3 transition-all ${
                  openSubmenu && "-rotate-45 -translate-y-1"
                }`}
              ></span>
            </span>
            <IoSearch className="mx-8 text-3xl transition-opacity cursor-pointer max-sm:hidden grow text-neutral opacity-80 hover:opacity-100" />
          </motion.div>

          <motion.h1
            layout
            // key={hidden}
            className={`font-bold tracking-wide text-neutral grow text-center ${
              hidden ? "text-3xl" : "text-5xl"
            }`}
          >
            cosme
          </motion.h1>

          <motion.div
            layout="position"
            className="flex items-center w-1/6 gap-4 justify-evenly"
          >
            <Link
              href="/account"
              className="text-3xl font-semibold text-center transition-opacity text-neutral hover:cursor-pointer max-sm:hidden opacity-80 hover:opacity-100 "
            >
              <FaRegUser />
            </Link>
            <MdShoppingBasket
              onClick={() => setIsOpen(!openSubmenu)}
              className="text-4xl transition-opacity text-neutral hover:cursor-pointer opacity-80 hover:opacity-100"
            />
          </motion.div>
        </div>
        <Cart isOpen={isOpen} toggle={() => setIsOpen(false)} />
      </motion.nav>
      <Submenu openSubmenu={openSubmenu} />
    </motion.div>
  );
};

export default Navbar;
