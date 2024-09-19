"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["8vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["90%", "100%"]);

  return (
    <footer ref={ref} className="z-10 w-full px-3 py-12 bg-base-200 ">
      <motion.div
        style={{ y, scale }}
        className="flex flex-wrap items-center justify-center mx-auto gap-y-6 max-w-8xl"
      >
        <div className="flex flex-row gap-4 text-2xl md:text-3xl lg:gap-6 xl:gap-8">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-1 px-2 text-sm font-semibold text-center sm:px-12 grow md:grid-cols-4 md:text-lg md:gap-6 lg:gap-10 xl:gap-12 text-base-content">
          <Link href="/contact">
            <li className="hover:bg-base-300 py-1.5 px-6 rounded-full opacity-80 hover:opacity-100 transition-all">
              Contact
            </li>
          </Link>
          <Link href="/terms">
            <li className="hover:bg-base-300 py-1.5 px-6 rounded-full opacity-80 hover:opacity-100 transition-all">
              Terms of Service
            </li>
          </Link>
          <Link href="/privacy">
            <li className="hover:bg-base-300 py-1.5 px-6 rounded-full opacity-80 hover:opacity-100 transition-all">
              Privacy Policy
            </li>
          </Link>
          <Link href="/returns">
            <li className="hover:bg-base-300 py-1.5 px-6 rounded-full opacity-80 hover:opacity-100 transition-all">
              Return Policy
            </li>
          </Link>
        </ul>
        <span className="font-semibold text-center text-md md:text-lg text-base-300">
          Copyright Cosme 2024
        </span>
      </motion.div>
    </footer>
  );
}
