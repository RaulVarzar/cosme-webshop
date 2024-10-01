"use client";

import { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import Link from "next/link";

import { Cart } from "../shoppingCart/sideBar";

import { MdShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Submenu } from "./subMenu";
import { Hamburger } from "./hamburger";

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
    <>
      <motion.nav
        layout
        style={{ borderRadius: "44px" }}
        className={`w-full h-auto inset-x-0 max-sm:rounded-none fixed mx-auto flex flex-col overflow-hidden bg-base-100 z-40 
         ${hidden ? "max-w-6xl shadow top-4" : " max-w-8xl top-0 "} ${
          openSubmenu && "shadow"
        }`}
      >
        <motion.div
          layout
          className={`flex justify-center w-full items-center mx-auto px-3 md:px-4 lg:px-6 py-3 sm:py-4 md:py-6  ${
            !hidden && openSubmenu ? "bg-base-100" : "bg-base-100"
          } `}
        >
          <motion.div
            layout
            className="flex items-center justify-start w-1/6 gap-4"
          >
            <Hamburger
              toggleSubmenu={() => toggleSubmenu()}
              openSubmenu={openSubmenu}
            />
          </motion.div>
          <motion.div
            layout="position"
            className="inline-block w-full align-top"
          >
            <motion.h1
              layout="position"
              className={`font-bold tracking-wide text-neutral sm:text-center h-fit leading-none ${
                hidden ? "text-2xl sm:text-3xl" : "sm:text-5xl text-3xl"
              }`}
            >
              cosme
            </motion.h1>
          </motion.div>

          <motion.div
            layout="position"
            className="flex items-center justify-end gap-4 sm:gap-8 md:gap-12 w-fit sm:w-1/6"
          >
            <Link
              href="/?login=true"
              className="text-2xl font-semibold text-center transition-opacity sm:text-3xl text-neutral hover:cursor-pointer opacity-80 hover:opacity-100 "
            >
              <FaRegUser />
            </Link>
            <motion.div whileTap={{ scale: 0.9 }} className="px-2">
              <MdShoppingBasket
                onClick={() => setIsOpen(!openSubmenu)}
                className="text-3xl transition-opacity sm:text-4xl text-neutral hover:cursor-pointer opacity-80 hover:opacity-100"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        {openSubmenu && <Submenu openSubmenu={openSubmenu} />}
        {isOpen && <Cart isOpen={isOpen} toggle={() => setIsOpen(false)} />}
      </motion.nav>
    </>
  );
};

export default Navbar;
