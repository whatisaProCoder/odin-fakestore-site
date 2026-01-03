import BackButton from "../components/common/BackButton";
import Carousel from "../components/common/Carousel";
import useCarousel from "../hooks/useCarousel";
import CategoryChip from "../components/shop/CategoryChip";
import Counter from "../components/common/Counter";
import AddToCartButton from "../components/common/AddToCartButton";
import AddToWishlistButton from "../components/common/AddToWishlistButton";
import useProduct from "../hooks/useProduct";

import img1 from "../assets/images/clothes-example.jpeg";
import img2 from "../assets/images/electronics-example.jpg";
import img3 from "../assets/images/misc-example.webp";
import { useNavigate, useOutletContext, useParams } from "react-router";

function Product() {
  const navigate = useNavigate();

  const { productID } = useParams();

  console.log(productID);

  if (!productID || productID === "") {
    navigate("/error");
  }

  const { data: productDataFromAPI, error, loading } = useProduct(productID);

  console.log({ productDataFromAPI, loading, error });

  const { dataCollectionHelperMethods } = useOutletContext();

  const productData = dataCollectionHelperMethods.getProductData({ productID });

  let addedToCart = productData ? productData.addedToCart : false;
  let addedToWishlist = productData ? productData.addedToWishlist : false;
  let count = productData ? productData.count : 1;

  let productImages = [{ src: img1 }, { src: img2 }, { src: img3 }];

  let defaultProductData = null;

  if (!loading & !error & productDataFromAPI) {
    productImages = productDataFromAPI.images.map((imageURL) => ({
      src: imageURL,
    }));

    defaultProductData = {
      productID,
      image: productDataFromAPI.thumbnail,
      title: productDataFromAPI.title,
      price: productDataFromAPI.price,
    };
  }

  const { itemIndex, setItemIndex } = useCarousel({
    itemArray: productImages,
    delay: 1700,
  });

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

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      {!loading && !error && (
        <div className="max-w-350 px-20 max-sm:px-10 w-full">
          <BackButton />
          <div className="mt-10 flex flex-row gap-12 max-xl:flex-col max-sm:gap-8">
            <div className="flex flex-row justify-start w-120 max-xl:justify-center max-xl:w-full">
              <Carousel
                itemArray={productImages}
                itemIndex={itemIndex}
                setItemIndex={setItemIndex}
                height="20rem"
                width="20rem"
              />
            </div>
            <div className="flex flex-col">
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
        </div>
      )}
    </div>
  );
}

export default Product;
