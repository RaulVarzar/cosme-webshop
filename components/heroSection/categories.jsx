const Categories = ({ data, selectedCategory, changeCategory }) => {
  return (
    <ul className="flex flex-row md:flex-col gap-2 md:gap-4 w-full justify-between lg:gap-8">
      {data.map((category, i) => (
        <li
          className={`text-sm sm:text-xl hover:cursor-pointer relative transition-all ${
            selectedCategory === i ? "font-semibold" : "font-normal opacity-70"
          }`}
          key={i}
          onClick={() => changeCategory(i)}
        >
          {category.title}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
