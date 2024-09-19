import { Subtitle } from "./subtitle";
import { Title } from "./title";

export const Newsletter = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full mx-auto justify-center items-center max-w-7xl gap-y-8 gap-x-12 py-10 md:py-12 lg:py-16 xl:py-20 border-t-1 mt-2 md:mt-4 lg:mt-8 xl:mt-12">
      <div className="flex flex-col  w-full text-center text-balance sm:max-w-sm max-sm:px-8">
        <Title />
        <Subtitle />
      </div>
      <div className="flex flex-col md:flex-row gap-3 max-sm:max-w-80 max-sm:px-3 md:min-w-96 justify-start">
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md max-sm:mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <button className="btn btn-accent btn-outline max-w-md max-sm:mx-auto">
          Subscribe
        </button>
      </div>
    </div>
  );
};
