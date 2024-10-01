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
    title: "Nature",
    photo: "philosophy.png",
    link: "/#",
  },
  {
    id: 2,
    title: "LeaBlack",
    photo: "bellie.webp",
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
    <div className="flex flex-col sm:flex-row w-full gap-2  py-6 mx-auto 2xl:pb-48 text-center max-w-8xl sm:py-16 md:py-24 lg:py-32 items-start">
      <div className="sm:w-1/3 w-full sm:sticky top-0">
        <Header />
      </div>
      <div className="flex max-sm:pt-24 sm:w-2/3 flex-row flex-wrap place-items-start gap-y-1 sm:gap-y-4 md:gap-y-8 lg:gap-y-12">
        {COLLECTIONS.map((collection, i) => (
          <Collection key={i} data={collection} />
        ))}
      </div>
    </div>
  );
};
