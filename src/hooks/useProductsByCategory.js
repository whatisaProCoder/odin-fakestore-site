import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";
import { filterProductByException } from "../constants/productExceptions";

const useProductsByCategory = ({ categorySlug, pageNumber = 1 }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) return
    if (categorySlug === "all")
      DummyJSON().getProductsByPage(pageNumber)
        .then(response => setData({ total: response.total, products: filterProductByException(response.products) }))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    else
      DummyJSON().getProductsByCategory({ categorySlug, pageNumber })
        .then(response => setData({ total: response.total, products: filterProductByException(response.products) }))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

  }, [categorySlug, pageNumber]);

  return { data, error, loading };
};

export default useProductsByCategory;
