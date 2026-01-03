import ErrorPrompt from "../components/common/ErrorPrompt";
import ProductCard from "../components/shop/ProductCard";
import { useOutletContext } from "react-router";

function Wishlist() {
  const { dataCollectionHelperMethods } = useOutletContext();

  const products = dataCollectionHelperMethods.getProductsInWishlist();

  const emptyCart = products.length === 0;

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-md">
          Your Wishlist
        </div>
        {emptyCart && (
          <div className="mt-36 flex flex-col items-center justify-center">
            <ErrorPrompt text="Your wishlist is empty" />
          </div>
        )}
        {!emptyCart && (
          <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.productID}
                  productID={product.productID}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
