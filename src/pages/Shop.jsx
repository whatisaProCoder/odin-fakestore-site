import { useState } from "react";
import CategoryChips from "../components/shop/CategoryChips";
import useCategories from "../hooks/useCategories";
import ErrorPrompt from "../components/common/ErrorPrompt";

function Shop() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);

  const [filterSectionActive, setFilterSectionActive] = useState(false);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useCategories({ enabled: filterSectionActive });

  const toggleFilter = () => {
    setFilterSectionActive((state) => !state);
  };

  const handleCategoryOnClick = (index) => {
    setActiveCategoryIndex(index);
  };

  const checkCategoryIndex = (index) => {
    return index === activeCategoryIndex;
  };

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="poppins text-xl font-semibold max-sm:text-sm">
            Products
          </div>
          <div
            onClick={toggleFilter}
            className="select-none px-3 py-1 border border-[#32333fb5] rounded-2xl poppins text-md max-sm:text-xs font-medium transition-colors hover:bg-[#1b1d20]"
          >
            Filter
          </div>
        </div>
        {filterSectionActive && !categoryLoading && categoryError && (
          <div className="mt-6 flex flex-row justify-center items-center">
            <ErrorPrompt text="Sorry, we couldn't load the categories." />
          </div>
        )}
        {filterSectionActive && !categoryLoading && !categoryError && (
          <div className="mt-6 flex flex-row flex-wrap gap-3 max-sm:gap-2 fade-in border-b pb-6 border-[#32333fb5]">
            <CategoryChips
              text="All"
              active={checkCategoryIndex(-1)}
              onClick={() => handleCategoryOnClick(-1)}
            />
            {!categoryLoading &&
              categoryData.map((category, index) => (
                <CategoryChips
                  key={category.slug}
                  text={category.name}
                  onClick={() => handleCategoryOnClick(index)}
                  active={checkCategoryIndex(index)}
                />
              ))}
          </div>
        )}
        <div className="mt-10 mb-5 grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-4">
          BRO
        </div>
      </div>
    </div>
  );
}

export default Shop;
