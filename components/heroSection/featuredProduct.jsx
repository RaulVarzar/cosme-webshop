import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = ({ data, selectedCategory }) => {
  return (
    <div className=" w-full h-full flex items-center">
      <div className="pr-12 grow lg:pr-16 xl:pr-20 max-sm:text-center">
        <span className=" text-base-content text-md sm:text-lg lg:text-2xl  font-medium rounded-md px-4 py-0.5">
          {data[selectedCategory].featuredBrand}
        </span>
        <h2 className="text-2xl font-semibold text-balance text-neutral  md:text-3xl lg:text-4xl 2xl:text-8xl ">
          {data[selectedCategory].featuredProduct}
        </h2>
        <Link href={data[selectedCategory].link}>
          <button className="px-6 py-3 mt-2 text-sm font-bold transition-all duration-200 ease-out rounded-xl border-1 hover:bg-accent hover:border-accent btn-accent border-neutral text-neutral hover:text-base-100 md:mt-4 md:px-10 sm:text-lg lg:text-xl">
            Shop now
          </button>
        </Link>
      </div>
      <div className="relative flex flex-col justify-end md:w-1/2  max-w-2xl h-full py-4 gap-4 ">
        <div className="relative h-96 md:h-full">
          <Image
            src={`/hero/${data[selectedCategory].photo}`}
            alt="heroImage"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedProduct;
