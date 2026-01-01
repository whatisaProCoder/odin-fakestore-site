import { useState, useEffect } from "react";
import DummyJSON from "../api/DummyJSON";

const useCategories = ({ enabled }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!enabled) return

    DummyJSON().getAllCategories()
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [enabled]);

  return { data, error, loading };
};

export default useCategories;
