"use client";
import Carousel from "./carousel";
import { Title } from "./title";

const POPULAR = [
  {
    id: 0,
    productCategory: "Blush Sticks",
    productName: "Blush Pop",
    price: 39.99,
    photo: "/popular/popular1.jpg",
  },
  {
    id: 1,
    productCategory: "Highlighters",
    productName: "Face Duo",
    price: 14.99,
    photo: "/popular/popular2.jpg",
  },
  {
    id: 2,
    productCategory: "Highlighters",
    productName: "Halo Glow",
    price: 32.99,
    photo: "/popular/popular3.jpg",
  },
  {
    id: 3,
    productCategory: "Eye Gels",
    productName: "Eye Do All Things",
    price: 29.99,
    photo: "/popular/popular4.jpg",
  },
];

const Popular = () => {
  return (
    <div className="flex flex-col w-full gap-8 py-12 text-5xl md:gap-12 xl:gap-16 lg:pt-20 xl:pt-32 max-w-8xl h-fit ">
      <Title />
      <Carousel data={POPULAR} />
    </div>
  );
};

export default Popular;
