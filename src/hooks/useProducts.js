import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useProducts = ({ categorySlug, pageNumber }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categorySlug)
      DummyJSON().getProductsByCategory({ categorySlug, pageNumber })
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    else
      DummyJSON().getProductsByPage(pageNumber)
        .then((response) => setData(response.products))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));

  }, [categorySlug, pageNumber]);

  return { data, error, loading };
};

export default useProducts;
