import { useEffect, useState } from "react";

function useCarousel({ itemArray, delay, slideshow = true }) {
  const [itemIndex, setItemIndex] = useState(0);
  const [disable, setDisable] = useState(!slideshow);

  const nextItem = () => {
    setItemIndex((index) => {
      return (index + 1) % itemArray.length;
    });
    setDisable(true);
  };
  const prevItem = () => {
    setItemIndex((index) => {
      if (index == 0) {
        return itemArray.length - 1;
      } else {
        return index - 1;
      }
    });
    setDisable(true);
  };
  useEffect(() => {
    if (!itemArray || itemArray.length === 0 || disable)
      return

    itemArray.forEach(item => {
      const img = new Image();
      img.src = item.src;
    });

    const interval = setInterval(() => {
      setItemIndex((index) => (index + 1) % itemArray.length);
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [itemArray, delay, disable]);

  return { itemIndex, nextItem, prevItem };
}

export default useCarousel;
