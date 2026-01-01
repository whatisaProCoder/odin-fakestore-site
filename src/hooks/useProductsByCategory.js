import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useProductsByCategory = ({ slug, page }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DummyJSON().getProductsByCategory({ categorySlug: slug, pageNumber: page })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [slug, page]);

  return { data, error, loading };
};

export default useProductsByCategory;
