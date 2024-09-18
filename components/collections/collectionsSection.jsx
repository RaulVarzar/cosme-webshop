import { Collection } from "./collectionItem";
import { Header } from "./sectionHeader";

const COLLECTIONS = [
  {
    id: 0,
    title: "Lalucell",
    photo: "lalucell.png",
    link: "/#",
  },
  {
    id: 1,
    title: "Philosophy",
    photo: "philosophy.png",
    link: "/#",
  },
  {
    id: 2,
    title: "Bellie",
    photo: "bellie.png",
    link: "/#",
  },
  {
    id: 3,
    title: "Pergusa",
    photo: "pergusa.png",
    link: "/#",
  },
];

export const Collections = () => {
  return (
    <div className="flex flex-col mx-auto w-full gap-12 px-4 py-6 text-center max-w-8xl sm:py-16 md:py-24 lg:py-32 ">
      <div className="flex flex-row flex-wrap place-items-start gap-y-4 md:gap-y-8 lg:gap-y-12">
        <Header />
        {COLLECTIONS.map((collection, i) => (
          <Collection key={i} data={collection} />
        ))}
      </div>
    </div>
  );
};
