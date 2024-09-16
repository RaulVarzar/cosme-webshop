const Carousel = () => {
  return (
    <div className="flex p-16 items-center justify-center bg-base-200 py-[15vh] w-full ">
      <div className="flex flex-row gap-6 md:gap-12 h-full w-full max-w-7xl">
        <div className="w-1/2 min-h-[45vh] bg-accent h-full rounded-3xl"></div>
        <div className="w-1/2 bg-accent min-h-[45vh] shadow-sm h-full rounded-3xl"></div>
      </div>
    </div>
  );
};

export default Carousel;
