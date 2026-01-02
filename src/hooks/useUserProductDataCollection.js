import { useEffect, useState } from "react";
import UserProductData from "../models/userProductData";
import { getSavedUserData, setUserData } from "../utils/storage";

function useUserProductDataCollection() {
  const [userProductDataCollection, setUserProductDataCollection] = useState(getSavedUserData());

  useEffect(() => {
    setUserData(userProductDataCollection)
  }, [userProductDataCollection]);

  const getProductData = ({ productID }) => {
    const productData = userProductDataCollection.find(
      (product) => product.productID === productID
    );
    return productData;
  }

  const toggleAddToCartState = ({ productID }) => {
    const productIndex = userProductDataCollection.findIndex((product) => product.productID === productID)
    if (productIndex !== -1) {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection[productIndex] = {
        ...newUserProductDataCollection[productIndex],
        addedToCart: !newUserProductDataCollection[productIndex].addedToCart
      }
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
    const productIndex = userProductDataCollection.findIndex((product) => product.productID === productID)
    if (productIndex !== -1) {
      let newUserProductDataCollection = [...userProductDataCollection];
      newUserProductDataCollection[productIndex] = {
        ...newUserProductDataCollection[productIndex],
        addedToWishlist: !newUserProductDataCollection[productIndex].addedToWishlist
      }
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
    const productIndex = userProductDataCollection.findIndex((product) => product.productID === productID)
    if (productIndex !== -1) {
      let newUserProductDataCollection = [...userProductDataCollection];
      let productCount = newUserProductDataCollection[productIndex].count;
      if (minus && productCount > 1) {
        productCount = productCount - 1;
      } else if (!minus && productCount <= 7) {
        productCount = productCount + 1;
      }
      newUserProductDataCollection[productIndex] = {
        ...newUserProductDataCollection[productIndex],
        count: productCount
      }
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