import { motion, spring, easeOut } from "framer-motion";
import { Category } from "./category";

const subMenuVariants = {
  hidden: {
    opacity: 1,
    y: "0%",
    transition: { delay: 0.15, duration: 0.12, type: "tween" },
  },
  visible: {
    opacity: 1,
    y: "100%",
    transition: {
      type: "spring",
      damping: 14,
      delay: 0.1,
      mass: 0.3,
      stiffness: 180,
    },
    boxShadow: "0px 12px 8px -8px rgba(0, 24, 23, 0.1)",
  },
};

export const Submenu = ({ openSubmenu }) => {
  return (
    <motion.div
      variants={subMenuVariants}
      initial="hidden"
      animate={openSubmenu ? "visible" : "hidden"}
      className={`absolute bottom-0 shadow-d left-0 w-full bg-base-100 py-8 px-4 -z-10 ${
        openSubmenu ? "shadow-d" : " "
      }`}
    >
      <div className="flex flex-col items-start w-full gap-4 mx-auto sm:flex-row justify-evenly max-w-8xl">
        <Category
          title="Eyes"
          categories={["eyeshadow", "mascara", "eyeliner", "eye primer"]}
        />
        <Category
          title="Lips"
          categories={["lipstick", "lip gloss", "lip balm", "lip liner"]}
        />
        <Category
          title="Skin"
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
