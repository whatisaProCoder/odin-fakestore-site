import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useSearchProduct = (key) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (key === null || key === undefined || key === "") { return }
    DummyJSON().searchProduct(key)
      .then((response) => setData(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [key]);

  return { data, error, loading };
};

export default useSearchProduct;
