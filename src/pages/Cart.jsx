import useMultipleProducts from "../hooks/useMultipleProducts";
import ErrorPrompt from "../components/common/ErrorPrompt";
import Loader from "../components/common/Loader";
import ProductCard from "../components/shop/ProductCard";
import { useNavigate, useOutletContext } from "react-router";
import ActionButton from "../components/common/ActionButton";
import successIcon from "../assets/icons/success-icon.svg";
import { useState } from "react";

function Cart() {
  const { dataCollectionHelperMethods } = useOutletContext();

  const navigate = useNavigate();

  const productIDs = dataCollectionHelperMethods.getProductIDsInCart();

  const { data, loading, error } = useMultipleProducts(productIDs);

  const emptyCart = productIDs.length === 0;

  let totalCount = 0;
  let subTotal = 0;
  let tax = 0;
  let shipping = 0;
  let packaging = 0;
  let total = 0;

  if (!emptyCart) {
    data.forEach((product) => {
      const productCount = dataCollectionHelperMethods.getProductData({
        productID: product.id,
      }).count;
      subTotal += product.price * productCount;
      totalCount += productCount;
    });

    subTotal = Number.parseFloat(subTotal.toFixed(2));

    tax = Number.parseFloat((0.14 * subTotal).toFixed(2));

    if (totalCount < 5) shipping = 7 * totalCount;

    packaging = 9.25 * totalCount;

    total = Number.parseFloat(
      (subTotal + tax + shipping + packaging).toFixed(2)
    );
  }

  const [checkoutMsg, setCheckoutMsg] = useState("");

  const handleCheckout = () => {
    setTimeout(() => {
      setCheckoutMsg("Order was placed successfully!");
    }, 1000);
    setTimeout(() => {
      dataCollectionHelperMethods.clearCart();
      navigate("/");
    }, 4000);
  };

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
            {!loading && !error && (
              <div>
                <div className="mt-16 poppins text-xl font-semibold max-sm:text-md">
                  Order Summary
                </div>
                <div className="flex flex-row justify-start">
                  <div className="mt-6 bg-[#14161a] border border-[#202227] w-110 max-md:w-full rounded-md">
                    <div className="poppins text-[0.95rem] max-sm:text-sm px-16 max-sm:px-8 py-8">
                      <div className="px-6 py-3 max-sm:py-2 flex flex-row items-center justify-between border-b border-[#32333fb5]">
                        <div>Subtotal</div>
                        <div className="font-bold">$ {subTotal}</div>
                      </div>
                      <div className="px-6 py-3 max-sm:py-2 flex flex-row items-center justify-between border-b border-[#32333fb5]">
                        <div>Tax (14%)</div>
                        <div className="font-bold">$ {tax}</div>
                      </div>
                      <div className="px-6 py-3 max-sm:py-2 flex flex-row items-center justify-between border-b border-[#32333fb5]">
                        <div>Shipping</div>
                        <div className="font-bold">
                          {shipping === 0 ? "Free" : `$ ${shipping}`}
                        </div>
                      </div>
                      <div className="px-6 py-3 max-sm:py-2 flex flex-row items-center justify-between border-b border-[#32333fb5]">
                        <div>Packaging</div>
                        <div className="font-bold">$ {packaging}</div>
                      </div>
                      <div className="px-6 py-3 max-sm:py-2 flex flex-row items-center justify-between">
                        <div className="font-bold">Total</div>
                        <div className="font-bold">$ {total}</div>
                      </div>
                    </div>
                    <div className="bg-[#191C21] py-8 max-sm:py-6 flex flex-row justify-center items-center">
                      <ActionButton
                        text="Checkout"
                        className="max-sm:text-sm"
                        onClick={handleCheckout}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {checkoutMsg != "" && (
        <div className="fixed bottom-16 fade-in bg-[rgba(255,255,255,0.87)] p-4 rounded-full flex flex-row items-center gap-4 text-xl text-[#101215] font-bold inter">
          <img src={successIcon} className="w-8" />
          Order was placed successfully!
        </div>
      )}
    </div>
  );
}

export default Cart;
