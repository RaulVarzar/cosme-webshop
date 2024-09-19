import { motion } from "framer-motion";
import { Category } from "./category";
import { SearchInput } from "./searchInput";

export const Submenu = ({ openSubmenu }) => {
  return (
    <motion.div className="flex flex-col w-full gap-4 px-4 py-8 lg:gap-8 md:gap-6 sm:px-6 md:px-8 -z-10 bg-base-200 ">
      <div className="flex flex-row justify-center w-full gap-2">
        <SearchInput />
      </div>
      <div className="grid items-start grid-cols-2 gap-6 py-4 mx-auto sm:py-6 lg:py-10 xl:py-12 w-fit md:grid-cols-4 sm:flex-row justify-evenly max-w-8xl">
        <Category
          title="Eyes"
          open={openSubmenu}
          categories={["eyeshadow", "mascara", "eyeliner", "eye primer"]}
        />
        <Category
          title="Lips"
          open={openSubmenu}
          categories={["lipstick", "lip gloss", "lip balm", "lip liner"]}
        />
        <Category
          title="Skin"
          open={openSubmenu}
          categories={[
            "foundation",
            "face primer",
            "concealer",
            "blush",
            "highlighter",
            "bronzer",
          ]}
        />
        <Category
          title="Brushes & Tools"
          open={openSubmenu}
          categories={[
            "face brushes",
            "eye brushes",
            "sponges & applicators",
            "skincare tools",
            "brush sets",
          ]}
        />
      </div>
    </motion.div>
  );
};
