import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useMultipleProducts = (productIDs) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productIDs.length === 0) { return; }
    Promise.allSettled(
      productIDs.map(id => DummyJSON().getProductByID(id))
    )
      .then((response) => {
        const products = response
          .filter(resObj => resObj.status === "fulfilled")
          .map(resObj => resObj.value)
        if (products.length != 0)
          setData(products)
        else
          setError(new Error("Could not reach the API."))
      }
      )
      .finally(() => setLoading(false));
  }, [productIDs]);

  return { data, error, loading };
};

export default useMultipleProducts;
