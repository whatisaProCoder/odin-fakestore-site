import { useNavigate, useOutletContext } from "react-router";
import Counter from "../common/Counter";
import heartOutlineIcon from "../../assets/icons/heart-outline-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import AddToCartButton from "../common/AddToCartButton";

function ProductCard({ productID, image, title, price }) {
  const navigate = useNavigate();

  const { dataCollectionHelperMethods } = useOutletContext();

  const productData = dataCollectionHelperMethods.getProductData({ productID });

  let addedToCart = productData ? productData.addedToCart : false;
  let addedToWishlist = productData ? productData.addedToWishlist : false;
  let count = productData ? productData.count : 1;

  const handleWishlistToggle = () => {
    dataCollectionHelperMethods.toggleWishlistState({ productID });
  };

  const handlePrevCount = () => {
    dataCollectionHelperMethods.handleCount({ productID, minus: true });
  };

  const handleNextCount = () => {
    dataCollectionHelperMethods.handleCount({ productID, minus: false });
  };

  const handleAddToCart = () => {
    dataCollectionHelperMethods.toggleAddToCartState({ productID });
  };

  const handleOpenDetails = () => {
    navigate(`/product/${productID}`);
  };

  return (
    <div className="bg-[#1b1d20] flex flex-col p-2 border border-[#32333fb5] rounded-md max-sm:rounded-xl transition-all hover:drop-shadow-xl hover:-translate-y-1">
      <div className="flex-1 flex flex-col">
        <img
          onClick={handleOpenDetails}
          src={image}
          className="rounded-xs max-sm:rounded-md bg-[rgba(255,255,255,0.87)] aspect-square"
        />
        <div className="flex-1 flex flex-col gap-4 p-3">
          <div
            onClick={handleOpenDetails}
            className="flex-1 inter text-[1rem] max-sm:text-sm font-semibold"
          >
            {title}
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="inter text-md max-sm:text-[0.9rem] font-bold">
              $ {price}
            </div>
            <button onClick={handleWishlistToggle}>
              <img
                src={addedToWishlist ? heartIcon : heartOutlineIcon}
                className="w-5"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-row gap-3 max-sm:gap-2 items-center">
        <Counter
          value={count}
          className="h-full"
          onPrev={handlePrevCount}
          onNext={handleNextCount}
        />
        <AddToCartButton
          added={addedToCart}
          onClick={handleAddToCart}
          className="flex-1"
        />
      </div>
    </div>
  );
}

export default ProductCard;
