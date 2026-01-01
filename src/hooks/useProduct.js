import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useProduct = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DummyJSON().getProductByID(id)
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { data, error, loading };
};

export default useProduct;
