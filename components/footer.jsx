import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-200   z-10 w-full px-3 py-12 ">
      <div className="max-w-8xl flex flex-wrap items-center justify-center mx-auto">
        <div className="flex flex-row gap-2 text-xl md:text-2xl md:gap-4 lg:gap-6 xl:gap-8">
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

        <span className="font-semibold text-center text-md md:text-lg grow text-base-300">
          Copyright Cosme 2024
        </span>

        <ul className="flex flex-row gap-1 text-sm font-semibold md:text-lg md:gap-6 lg:gap-10 xl:gap-12 text-base-content">
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
      </div>
    </footer>
  );
}
