import { useNavigate } from "react-router";
import { TopCategories } from "../../constants/topCategories";
import CategoryCard from "./CategoryCard";

function Categories() {
  const navigate = useNavigate();

  const handleExploreMoreOnClick = () => {
    navigate("/shop");
  };

  const handleCategoryCardOnClick = (categorySlug) => {
    navigate(`/shop/${categorySlug}`);
  };

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="poppins text-xl font-semibold max-sm:text-sm">
            Top Categories
          </div>
          <div
            onClick={handleExploreMoreOnClick}
            className="select-none px-3 py-1 border border-[#32333fb5] rounded-2xl poppins text-md max-sm:text-xs font-medium transition-colors hover:bg-[#1b1d20]"
          >
            Explore More
          </div>
        </div>
        <div className="mt-10 mb-5 grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4">
          {TopCategories.map((categoryObject) => (
            <CategoryCard
              onClick={() => handleCategoryCardOnClick(categoryObject.slug)}
              key={categoryObject.id}
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
