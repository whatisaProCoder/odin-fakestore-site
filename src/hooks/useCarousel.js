import { useEffect, useState } from "react";

function useCarousel({ itemArray, delay }) {
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemIndex((index) => (index + 1) % itemArray.length);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [itemArray, delay]);

  return { itemIndex, setItemIndex };
}

export default useCarousel;
