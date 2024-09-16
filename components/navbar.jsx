"use client";

import { useEffect, useState } from "react";
import { useScroll, motion, spring, easeOut } from "framer-motion";
import Link from "next/link";

import { Cart } from "./shoppingCart/sideBar";

import { IoSearch } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";

const subMenuVariants = {
  hidden: {
    opacity: 1,
    y: "-100%",
    transition: { type: spring, damping: 1, duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { type: spring, damping: 12, duration: 0.4 },
  },
};

const Navbar = () => {
  const { scrollY } = useScroll();

  // Shrink navbar on scroll
  const [hidden, setHidden] = useState(false);
  function update() {
    if (scrollY?.current < 50) {
      setHidden(false);
    } else if (scrollY?.current >= 50) {
      setHidden(true);
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
      layout
      className="border- border-fuchsia-900  flex flex-col z-50 w-full h-fit sticky top-0"
    >
      <nav
        className={`w-full top-0 left-0 bg-base-100  sticky z-50 transition-all duration-500 
         ${hidden ? "py-4 shadow-sm" : "py-8"}`}
      >
        <div
          className={`flex justify-center transition-all duration-500 items-center mx-auto ${
            hidden ? "max-w-7xl" : "max-w-8xl"
          }`}
        >
          <motion.div
            layout
            className="flex gap-4 w-1/6 justify-center items-center"
          >
            <span
              onClick={() => toggleSubmenu()}
              className="bg-neutral relative rounded-full h-11 w-11 cursor-pointer"
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
            <IoSearch className="text-3xl max-sm:hidden mx-8 grow text-neutral" />
          </motion.div>

          <motion.h1
            layout="preserve-aspect"
            className={`font-bold tracking-wide text-neutral grow text-center ${
              hidden ? "text-3xl" : "text-5xl"
            }`}
          >
            cosme
          </motion.h1>

          <motion.div
            layout
            className="gap-4 w-1/6 flex items-center justify-center"
          >
            <Link
              href="/account"
              className="grow max-sm:hidden text-center font-semibold opacity-80 hover:opacity-100 text-neutral transition-all"
            >
              ACCOUNT
            </Link>
            <MdShoppingBasket
              onClick={() => setIsOpen(!openSubmenu)}
              className="text-4xl text-neutral transition-all hover:cursor-pointer"
            />
          </motion.div>
        </div>
        <Cart isOpen={isOpen} toggle={() => setIsOpen(false)} />
      </nav>
      <motion.div
        variants={subMenuVariants}
        initial={hidden}
        animate={openSubmenu ? "visible" : "hidden"}
        className={`relative  w-full bg-neutral-content py-6 px-4 -z-10 ${
          openSubmenu ? "shadow-md h-fit" : "h-0 hidden"
        }`}
      >
        <ul className="flex flex-row gap-4 justify-evenly items-center text-xl font-medium">
          <li>test</li>
          <li> test 2</li>
          <li> lorem</li>
          <li> hello</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
