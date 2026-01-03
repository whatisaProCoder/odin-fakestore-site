import { useEffect, useState } from "react";
import UserProductData from "../models/userProductData";
import { getSavedUserData, setUserData } from "../utils/storage";

function useUserProductDataCollection() {
  const [userProductDataCollection, setUserProductDataCollection] = useState(
    getSavedUserData()
      .filter(productData => productData.addedToCart || productData.addedToWishlist)
  );

  useEffect(() => {
    setUserData(userProductDataCollection)
  }, [userProductDataCollection]);

  const getProductData = ({ productID }) => {
    const productData = userProductDataCollection.find(
      (product) => product.productID === productID
    );
    return productData;
  }

  const toggleAddToCartState = ({ productID, defaultProductData }) => {
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
          image: defaultProductData.image,
          title: defaultProductData.title,
          price: defaultProductData.price,
          addedToCart: true,
          addedToWishlist: false,
          count: 1,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
  };

  const toggleWishlistState = ({ productID, defaultProductData }) => {
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
          image: defaultProductData.image,
          title: defaultProductData.title,
          price: defaultProductData.price,
          addedToCart: false,
          addedToWishlist: true,
          count: 1,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
  }

  const handleCount = ({ productID, defaultProductData, minus = false } = {}) => {
    const productIndex = userProductDataCollection.findIndex((product) => product.productID === productID)
    if (productIndex !== -1) {
      let newUserProductDataCollection = [...userProductDataCollection];
      let productCount = newUserProductDataCollection[productIndex].count;
      if (minus && productCount > 1) {
        productCount = productCount - 1;
      } else if (!minus && productCount < 7) {
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
          image: defaultProductData.image,
          title: defaultProductData.title,
          price: defaultProductData.price,
          addedToCart: false,
          addedToWishlist: false,
          count: minus ? 1 : 2,
        })
      );
      setUserProductDataCollection(newUserProductDataCollection);
    }
  };

  const clearCart = () => {
    let newUserProductDataCollection = [...userProductDataCollection];
    newUserProductDataCollection = newUserProductDataCollection.filter(product => product.addedToCart !== true);
    setUserProductDataCollection(newUserProductDataCollection);
  }

  const getProductsInCart = () => {
    return userProductDataCollection.filter(product => product.addedToCart === true)
  }

  const getProductsInWishlist = () => {
    return userProductDataCollection.filter(product => product.addedToWishlist === true)
  }

  const dataCollectionHelperMethods = { getProductData, toggleAddToCartState, toggleWishlistState, handleCount, getProductsInCart, getProductsInWishlist, clearCart };

  return { userProductDataCollection, dataCollectionHelperMethods }
}

export default useUserProductDataCollection;