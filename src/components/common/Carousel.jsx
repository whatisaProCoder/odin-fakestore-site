import SlidingLoader from "./SlidingLoader";
import leftArrowWhite from "../../assets/icons/left-arrow-white.svg";
import rightArrowWhite from "../../assets/icons/right-arrow-white.svg";

function Carousel({
  itemArray,
  itemIndex,
  setItemIndex,
  className,
  height,
  width,
}) {
  const nextItem = () => {
    setItemIndex((index) => (index + 1) % itemArray.length);
  };
  const prevItem = () => {
    setItemIndex((index) => {
      if (index == 0) {
        return itemArray.length - 1;
      } else {
        return index - 1;
      }
    });
  };

  return (
    <div
      className={
        "bg-[#1b1d20] rounded-md p-2 border border-[#32333fb5] flex flex-col" +
        " " +
        className
      }
    >
      <div className="w-full flex-1 flex flex-col rounded-sm rounded-b-none overflow-hidden relative">
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
        <img
          key={itemIndex}
          src={itemArray[itemIndex].src}
          style={{
            height,
            width,
          }}
          className="fade-in object-cover"
        />
        <SlidingLoader
          percentage={`${(itemIndex / (itemArray.length - 1)) * 100}%`}
        />
      </div>
      <div key={itemIndex} className="mt-2 text-center inter fade-in-fast">
        {itemArray[itemIndex].name}
      </div>
    </div>
  );
}

export default Carousel;
