import { useState } from "react";
import UserProductData from "../models/userProductData";

function useUserProductDataCollection() {
  const [userProductDataCollection, setUserProductDataCollection] = useState(
    []
  );

  const getProductData = ({ productID }) => {
    const productData = userProductDataCollection.find(
      (product) => product.productID === productID
    );
    return productData;
  }

  const toggleAddToCartState = ({ productID }) => {
    const productData = getProductData({ productID });
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

  const toggleWishlistState = ({ productID }) => {
    const productData = getProductData({ productID });
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
  }

  const handleCount = ({ productID, minus = false } = {}) => {
    const productData = getProductData({ productID });
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

  const getProductsInCart = () => {
    return userProductDataCollection.filter(product => product.addedToCart === true)
  }

  const getProductsInWishlist = () => {
    return userProductDataCollection.filter(product => product.addedToWishlist === true)
  }

  const dataCollectionHelperMethods = { getProductData, toggleAddToCartState, toggleWishlistState, handleCount, getProductsInCart, getProductsInWishlist };

  return { userProductDataCollection, dataCollectionHelperMethods }
}

export default useUserProductDataCollection;