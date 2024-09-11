const Carousel = () => {
  return (
    <div className="flex p-16 items-center justify-center bg-base-200 w-[100vw] h-[60vh] flex-nowrap overflow-hidden ">
      <div className="flex flex-row gap-6 h-full w-full max-w-8xl">
        <div className="w-1/2 bg-accent h-full rounded-md"></div>
        <div className="w-1/2 bg-accent h-full rounded-md"></div>
      </div>
    </div>
  );
};

export default Carousel;
