import SlidingLoader from "./SlidingLoader";
import leftArrowWhite from "../../assets/icons/left-arrow-white.svg";
import rightArrowWhite from "../../assets/icons/right-arrow-white.svg";
import useCarousel from "../../hooks/useCarousel";
import LazyImage from "./LazyImage";

function StatefulCarousel({
  itemArray,
  delay,
  className,
  height,
  width,
  slideshow = true,
}) {
  const { itemIndex, prevItem, nextItem } = useCarousel({
    itemArray,
    delay,
    slideshow,
  });

  const numberOfItems = itemArray.length;

  const multipleItems = numberOfItems > 1;

  return (
    <div
      className={
        "bg-[#1b1d20] rounded-md p-2 border border-[#32333fb5] flex flex-col" +
        " " +
        className
      }
    >
      <div className="w-full flex-1 flex flex-col rounded-sm rounded-b-none overflow-hidden relative">
        {multipleItems && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-row justify-between items-center px-2 z-1">
            <button
              onClick={prevItem}
              className="bg-[#1b1d2098] backdrop-blur-md pr-0.5 rounded-full aspect-square h-8 flex flex-row justify-center items-center transition-colors hover:bg-[#2573e9d2]"
            >
              <img src={leftArrowWhite} />
            </button>
            <button
              onClick={nextItem}
              className="bg-[#1b1d2098] backdrop-blur-md pl-0.5 rounded-full aspect-square h-8 flex flex-row justify-center items-center transition-colors hover:bg-[#2573e9d2]"
            >
              <img src={rightArrowWhite} />
            </button>
          </div>
        )}
        <LazyImage
          key={itemIndex}
          src={itemArray[itemIndex].src}
          style={{
            height,
            width,
            borderBottomLeftRadius:
              multipleItems && itemArray[itemIndex].name ? "0" : "0.25rem",
            borderBottomRightRadius:
              multipleItems && itemArray[itemIndex].name ? "0" : "0.25rem",
          }}
          className="bg-[rgba(255,255,255,0.87)]"
        />
        {!itemArray[itemIndex].name && multipleItems && (
          <div className="absolute bottom-2 left-0 right-0 mt-2 flex flex-row justify-center items-center">
            <div className="flex flex-row gap-2 bg-[#1b1d2041] backdrop-blur-md p-1.5 rounded-full">
              {itemArray.map((item, index) => (
                <div
                  className="w-2.5 max-sm:w-2 aspect-square rounded-full transition-colors"
                  style={{
                    backgroundColor:
                      index === itemIndex
                        ? "rgba(255,255,255,0.87)"
                        : "rgba(0,0,0,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        )}
        {multipleItems && itemArray[itemIndex].name && (
          <SlidingLoader
            percentage={`${(itemIndex / (itemArray.length - 1)) * 100}%`}
          />
        )}
      </div>
      {itemArray[itemIndex].name && (
        <div key={itemIndex} className="mt-2 text-center inter fade-in-fast">
          {itemArray[itemIndex].name ?? `${itemIndex + 1} of ${numberOfItems}`}
        </div>
      )}
    </div>
  );
}

export default StatefulCarousel;
