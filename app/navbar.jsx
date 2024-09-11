import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdShoppingBasket } from "react-icons/md";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center max-w-8xl">
      <div className="flex gap-4 w-1/6 justify-start items-center">
        <span className="bg-neutral relative rounded-full h-11 w-11">
          <span className="w-5 h-0.5 bg-base-200 rounded-full absolute top-4 left-3"></span>
          <span className="w-5 h-0.5 rounded-full bg-base-200 absolute top-6 left-3"></span>
        </span>
        <IoSearch className="text-3xl mx-8 grow text-neutral" />
      </div>

      <h1 className="font-bold text-4xl tracking-wide text-neutral grow text-center">
        cosme
      </h1>

      <div className="gap-4 w-1/6 flex items-center">
        <Link
          href="/account"
          className="grow text-center font-semibold opacity-80 hover:opacity-100 text-neutral transition-all"
        >
          ACCOUNT
        </Link>
        <MdShoppingBasket className="text-3xl text-neutral opacity-80 hover:opacity-100 transition-all hover:cursor-pointer" />
      </div>
    </div>
  );
};
