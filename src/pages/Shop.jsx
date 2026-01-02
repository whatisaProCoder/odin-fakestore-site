import { useState } from "react";
import CategoryChips from "../components/shop/CategoryChips";
import useCategories from "../hooks/useCategories";
import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductCard from "../components/shop/ProductCard";
import Loader from "../components/common/Loader";
import ErrorPrompt from "../components/common/ErrorPrompt";
import Footer from "../components/layout/Footer";
import Paginator from "../components/shop/Paginator";
import { productLimitPerPage } from "../constants/productLimitPerPage";
import { useNavigate, useParams } from "react-router";

function Shop() {
  const navigate = useNavigate();

  const { category } = useParams();

  const activeCategorySlug = category || "all";

  const [filterSectionActive, setFilterSectionActive] = useState(false);

  const [activePageNumber, setActivePageNumber] = useState(1);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useCategories({ enabled: filterSectionActive });

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useProductsByCategory({
    categorySlug: activeCategorySlug,
    pageNumber: activePageNumber,
  });

  const toggleFilter = () => {
    setFilterSectionActive((state) => !state);
  };

  const handleCategoryOnClick = (slug) => {
    navigate(`/shop/${slug}`);
    setActivePageNumber(1);
  };

  const checkCategorySlug = (slug) => {
    return slug === activeCategorySlug;
  };

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  const handleNextPage = () => {
    setActivePageNumber((pageNumber) => pageNumber + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    if (activePageNumber > 1) {
      setActivePageNumber((pageNumber) => pageNumber - 1);
      scrollToTop();
    }
  };

  return (
    <>
      <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
        <div className="max-w-350 px-20 max-sm:px-10 w-full">
          <div className="flex flex-row items-center justify-between">
            <div className="poppins text-xl font-semibold max-sm:text-sm">
              Products
            </div>
            <div className="flex flex-row gap-2">
              <div
                onClick={toggleFilter}
                className="select-none px-3 py-1 border border-[#32333fb5] rounded-2xl poppins text-md max-sm:text-xs font-medium transition-colors hover:bg-[#1b1d20]"
              >
                Filter
              </div>
              {activeCategorySlug !== "all" && !filterSectionActive && (
                <div
                  onClick={() => handleCategoryOnClick("all")}
                  className="fade-in select-none px-3 py-1 border border-[#32333fb5] rounded-2xl poppins text-md max-sm:text-xs font-medium transition-colors hover:bg-[#1b1d20]"
                >
                  Show All
                </div>
              )}
            </div>
          </div>
          {filterSectionActive && !categoryLoading && categoryError && (
            <div className="mt-6 flex flex-row justify-center items-center">
              <ErrorPrompt text="Sorry, we couldn't load the categories." />
            </div>
          )}
          {filterSectionActive && !categoryLoading && !categoryError && (
            <div className="mt-6 flex flex-row flex-wrap gap-3 max-sm:gap-1.5 fade-in">
              <CategoryChips
                text="All"
                active={checkCategorySlug("all")}
                onClick={() => handleCategoryOnClick("all")}
              />
              {!categoryLoading &&
                categoryData.map((category) => (
                  <CategoryChips
                    key={category.slug}
                    text={category.name}
                    onClick={() => handleCategoryOnClick(category.slug)}
                    active={checkCategorySlug(category.slug)}
                  />
                ))}
            </div>
          )}
          {!productsLoading && !productsError && (
            <div className="mt-10">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
                {productsData.products.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      productID={product.id}
                      image={product.images[0]}
                      title={product.title}
                      price={product.price}
                    />
                  );
                })}
              </div>
              <div className="mt-16 flex flex-row justify-center items-center">
                <Paginator
                  activePageNumber={activePageNumber}
                  onNext={handleNextPage}
                  onPrev={handlePrevPage}
                  totalItems={productsData.total}
                  productsPerPage={productLimitPerPage}
                />
              </div>
            </div>
          )}
          {productsLoading && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <Loader text="Loading the products..." />
            </div>
          )}
          {!productsLoading && productsError && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <ErrorPrompt />
            </div>
          )}
        </div>
      </div>
      {!productsLoading && !productsError && <Footer className="mb-4" />}
    </>
  );
}

export default Shop;
