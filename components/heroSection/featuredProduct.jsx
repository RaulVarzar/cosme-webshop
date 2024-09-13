import Image from "next/image";
import Link from "next/link";

const FeaturedProduct = ({ data, selectedCategory }) => {
  return (
    <>
      <div className="w-1/2 relative h-full flex flex-col justify-end gap-4">
        <div className="h-96 md:h-full relative">
          <Image
            src={`/hero/${data[selectedCategory].photo}`}
            alt="heroImage"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="md:w-1/2 px-12 lg:px-16 xl:px-20 max-sm:text-center">
        <span className="font-light text-base-content text-md sm:text-lg lg:text-2xl">
          {data[selectedCategory].featuredBrand}
        </span>
        <h2 className="font-semibold text-balance text-neutral text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl max-w-80">
          {data[selectedCategory].featuredProduct}
        </h2>
        <Link href={data[selectedCategory].link}>
          <button className="border-1 hover:bg-accent hover:border-accent transition-all duration-200 ease-out rounded-sm py-3 px-6 btn-accent border-neutral text-neutral hover:text-base-100 mt-2 md:mt-4 md:px-10 text-sm sm:text-lg lg:text-xl font-bold">
            Shop now
          </button>
        </Link>
      </div>
    </>
  );
};
export default FeaturedProduct;
