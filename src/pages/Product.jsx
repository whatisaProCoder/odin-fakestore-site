import BackButton from "../components/common/BackButton";
import CategoryChip from "../components/shop/CategoryChip";
import Counter from "../components/common/Counter";
import AddToCartButton from "../components/common/AddToCartButton";
import AddToWishlistButton from "../components/common/AddToWishlistButton";
import useProduct from "../hooks/useProduct";
import useProductsByCategory from "../hooks/useProductsByCategory";
import { useNavigate, useOutletContext, useParams } from "react-router";
import StatefulCarousel from "../components/common/StatefulCarousel";
import Loader from "../components/common/Loader";
import ErrorPrompt from "../components/common/ErrorPrompt";
import SimpleProductCard from "../components/home/SimpleProductCard";

function Product() {
  const navigate = useNavigate();

  const { productID } = useParams();

  if (!productID || productID === "") {
    navigate("/error");
  }

  const { data: productDataFromAPI, error, loading } = useProduct(productID);

  const { dataCollectionHelperMethods } = useOutletContext();

  const productData = dataCollectionHelperMethods.getProductData({ productID });

  let addedToCart = productData ? productData.addedToCart : false;
  let addedToWishlist = productData ? productData.addedToWishlist : false;
  let count = productData ? productData.count : 1;

  let defaultProductData = null;

  let categorySlug = null;

  if (productDataFromAPI) {
    defaultProductData = {
      productID,
      image: productDataFromAPI.thumbnail,
      title: productDataFromAPI.title,
      price: productDataFromAPI.price,
    };
    categorySlug = productDataFromAPI.category;
  }

  const {
    data: similarProducts,
    loading: similarProductsLoading,
    error: similarProductsError,
  } = useProductsByCategory({ categorySlug });

  const handleWishlistToggle = () => {
    dataCollectionHelperMethods.toggleWishlistState({
      productID,
      defaultProductData,
    });
  };

  const handlePrevCount = () => {
    dataCollectionHelperMethods.handleCount({
      productID,
      defaultProductData,
      minus: true,
    });
  };

  const handleNextCount = () => {
    dataCollectionHelperMethods.handleCount({
      productID,
      defaultProductData,
      minus: false,
    });
  };

  const handleAddToCart = () => {
    dataCollectionHelperMethods.toggleAddToCartState({
      productID,
      defaultProductData,
    });
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      {!loading && !error && (
        <div className="max-w-350 px-20 max-sm:px-10 w-full">
          <BackButton onClick={handleBackButton} />
          <div className="mt-10 flex flex-row gap-12 max-xl:flex-col max-sm:gap-8">
            <div className="flex flex-row justify-start w-120 max-xl:justify-center max-xl:w-full">
              <StatefulCarousel
                itemArray={productDataFromAPI.images.map((url) => ({
                  src: url,
                }))}
                delay={2000}
                height="20rem"
                width="20rem"
              />
            </div>
            <div className="flex flex-col max-w-[68%] max-xl:max-w-full">
              <div className="flex flex-row items-center gap-4 flex-wrap">
                <div className="poppins font-semibold text-xl max-sm:text-[1rem] max-sm">
                  {productDataFromAPI.title}
                </div>
                <CategoryChip
                  text={productDataFromAPI.category}
                  active={true}
                />
              </div>
              <div className="mt-4 inter max-sm:text-sm text-justify">
                {productDataFromAPI.description}
              </div>
              <div className="mt-6 flex flex-row items-center flex-wrap gap-4 max-sm:flex-wrap-reverse">
                <div className="flex flex-row items-center gap-4 max-sm:w-full">
                  <Counter
                    value={count}
                    onNext={handleNextCount}
                    onPrev={handlePrevCount}
                  />
                  <AddToCartButton
                    className="max-sm:flex-1"
                    added={addedToCart}
                    onClick={handleAddToCart}
                    textWhenAdded="Remove from cart"
                  />
                </div>
                <AddToWishlistButton
                  className="max-sm:w-full"
                  added={addedToWishlist}
                  onClick={handleWishlistToggle}
                />
              </div>
            </div>
          </div>
          <div className="mt-16 poppins text-xl font-semibold max-sm:text-md">
            Similar Products
          </div>
          {!similarProductsLoading && !similarProductsError && (
            <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
              {similarProducts.products
                .filter((product) => {
                  return (
                    Number.parseInt(product.id) !== Number.parseInt(productID)
                  );
                })
                .slice(0, 4)
                .map((product) => (
                  <SimpleProductCard
                    key={product.id}
                    productID={product.id}
                    image={product.thumbnail}
                    title={product.title}
                    price={product.price}
                    scrollToTop={true}
                  />
                ))}
            </div>
          )}
          {similarProductsLoading && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <Loader text="Loading..." />
            </div>
          )}
          {!similarProductsLoading && similarProductsError && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <ErrorPrompt text="Could not load similar products" />
            </div>
          )}
        </div>
      )}
      {loading && (
        <div className="mt-36 flex flex-col items-center justify-center">
          <Loader text="Loading the product details..." />
        </div>
      )}
      {!loading && error && (
        <div className="mt-36 flex flex-col items-center justify-center">
          <ErrorPrompt />
        </div>
      )}
    </div>
  );
}

export default Product;
