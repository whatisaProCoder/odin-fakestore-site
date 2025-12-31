import { TopCategories } from "../../constants/topCategories";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <div className="pt-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="poppins text-xl font-semibold max-sm:text-sm">
            Top Categories
          </div>
          <div className="select-none px-3 py-1 border border-[#32333fb5] rounded-2xl poppins text-md max-sm:text-xs font-medium transition-colors hover:bg-[#1b1d20]">
            Explore More
          </div>
        </div>
        <div className="mt-10 grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 bg-[#32333fb5] gap-px">
          {TopCategories.map((categoryObject) => (
            <CategoryCard
              categoryImage={categoryObject.img}
              name={categoryObject.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
