import { useNavigate, useOutletContext } from "react-router";
import Counter from "../common/Counter";
import heartOutlineIcon from "../../assets/icons/heart-outline-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import AddToCartButton from "../common/AddToCartButton";
import UserProductData from "../../models/userProductData";

function ProductCard({ productID, image, title, price }) {
  const navigate = useNavigate();

  const { userProductDataCollection, setUserProductDataCollection } =
    useOutletContext();

  console.log(userProductDataCollection);

  let productData = null;
  let addedToCart = false;
  let addedToWishlist = false;
  let count = 1;

  if (userProductDataCollection) {
    productData = userProductDataCollection.find(
      (product) => product.productID === productID
    );
    if (productData) {
      addedToCart = productData.addedToCart;
      addedToWishlist = productData.addedToWishlist;
      count = productData.count;
    }
  }

  const toggleAddToCartState = () => {
    if (productData) {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection.find(
        (product) => product.productID === productID
      ).addedToCart = !productData.addedToCart;
      setUserProductDataCollection(newUserProductDataCollection);
    } else {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection.push(
        new UserProductData({
          productID: productID,
          addedToCart: true,
          addedToWishlist: false,
          count: 1,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
  };

  const toggleWishlistState = () => {
    if (productData) {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection.find(
        (product) => product.productID === productID
      ).addedToWishlist = !productData.addedToWishlist;
      setUserProductDataCollection(newUserProductDataCollection);
    } else {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection.push(
        new UserProductData({
          productID: productID,
          addedToCart: false,
          addedToWishlist: true,
          count: 1,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
  };

  const handleCount = ({ minus = false } = {}) => {
    if (productData) {
      let newUserProductDataCollection = [...userProductDataCollection];
      let newCount = productData.count;
      if (minus && productData.count > 1) {
        newCount--;
      } else if (!minus && productData.count <= 7) {
        newCount++;
      }
      newUserProductDataCollection.find(
        (product) => product.productID === productID
      ).count = newCount;
      setUserProductDataCollection(newUserProductDataCollection);
    } else {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection.push(
        new UserProductData({
          productID: productID,
          addedToCart: false,
          addedToWishlist: false,
          count: minus ? 1 : 2,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
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
            <button onClick={toggleWishlistState}>
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
          onPrev={() => handleCount({ minus: true })}
          onNext={() => handleCount()}
        />
        <AddToCartButton
          added={addedToCart}
          onClick={toggleAddToCartState}
          className="flex-1"
        />
      </div>
    </div>
  );
}

export default ProductCard;
