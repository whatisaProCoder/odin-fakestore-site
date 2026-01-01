import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useProductsByPage = (pageNumber) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DummyJSON().getProductsByPage(pageNumber)
      .then((response) => setData(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [pageNumber]);

  return { data, error, loading };
};

export default useProductsByPage;
