import { motion, spring, easeOut } from "framer-motion";
import { Category } from "./category";

export const Submenu = ({ openSubmenu }) => {
  return (
    <motion.div className="p-8 w-full -z-10 ">
      <div className="flex flex-col items-start w-full gap-4 mx-auto sm:flex-row justify-evenly max-w-8xl">
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
