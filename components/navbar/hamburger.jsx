export const Hamburger = ({ toggleSubmenu, openSubmenu }) => {
  return (
    <span
      onClick={toggleSubmenu}
      className="relative flex flex-col gap-1.5 sm:gap-2 p-3 cursor-pointer opacity-80 hover:opacity-100"
    >
      <span
        className={`sm:w-8 sm:h-1 w-6 h-[3px] bg-neutral rounded-full transition-all ${
          openSubmenu && "rotate-45 translate-y-1"
        }`}
      ></span>
      <span
        className={` h-[3px] sm:h-1 rounded-full bg-neutral  sm:top-6  transition-all ${
          openSubmenu
            ? "sm:w-8 w-6 -rotate-45 -translate-y-1.5 sm:-translate-y-2"
            : "sm:w-5 w-4"
        }`}
      ></span>
    </span>
  );
};
