import { Button } from "./button";
import { Input } from "./input";
import { Subtitle } from "./subtitle";
import { Title } from "./title";

export const Newsletter = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 mx-auto mt-2 sm:flex-row max-w-7xl gap-y-8 gap-x-12 md:py-12 lg:py-16 xl:py-20 border-t-1 md:mt-4 lg:mt-8 xl:mt-12">
      <div className="flex flex-col w-full text-center text-balance sm:max-w-sm max-sm:px-8">
        <Title />
        <Subtitle />
      </div>
      <div className="flex flex-col items-center justify-start gap-3 md:flex-row max-sm:max-w-80 max-sm:px-3 md:min-w-96">
        <Input />
        <Button />
      </div>
    </div>
  );
};
