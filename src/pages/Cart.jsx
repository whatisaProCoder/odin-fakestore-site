import useMultipleProducts from "../hooks/useMultipleProducts";
import ErrorPrompt from "../components/common/ErrorPrompt";
import Loader from "../components/common/Loader";
import ProductCard from "../components/shop/ProductCard";
import { useOutletContext } from "react-router";

function Cart() {
  const { dataCollectionHelperMethods } = useOutletContext();

  const productIDs = dataCollectionHelperMethods.getProductIDsInCart();

  const { data, loading, error } = useMultipleProducts(productIDs);

  const emptyCart = productIDs.length === 0;

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-md">
          Your Cart
        </div>
        {emptyCart && (
          <div className="mt-36 flex flex-col items-center justify-center">
            <ErrorPrompt text="Your cart is empty" />
          </div>
        )}
        {!emptyCart && (
          <div>
            <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
              {!loading &&
                !error &&
                data.map((product) => {
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
            {loading && (
              <div className="mt-36 flex flex-col items-center justify-center">
                <Loader text="Loading the products..." />
              </div>
            )}
            {!loading && error && (
              <div className="mt-36 flex flex-col items-center justify-center">
                <ErrorPrompt />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
