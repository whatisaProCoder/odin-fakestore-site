import leftArrowWhite from "../../assets/icons/left-arrow-white.svg";
import rightArrowWhite from "../../assets/icons/right-arrow-white.svg";

function Paginator({
  activePageNumber,
  onNext,
  onPrev,
  productsPerPage,
  totalItems,
}) {
  const nextAvailable = activePageNumber * productsPerPage < totalItems;
  const prevAvailable = activePageNumber > 1;

  if (!nextAvailable && !prevAvailable) return <></>;

  return (
    <div className="bg-[#1b1d20] border border-[#32333fb5] px-2 py-2 rounded-full flex flex-row justify-between items-center">
      {prevAvailable && (
        <button
          onClick={onPrev}
          className="bg-[#1b1d2098] pr-0.5 rounded-full fade-in aspect-square h-8 flex flex-row justify-center items-center transition-colors hover:bg-[#32333fb5]"
        >
          <img src={leftArrowWhite} />
        </button>
      )}
      <div className="mx-4 flex-1 text-center inter text-md font-semibold max-sm:text-sm">{`Page ${activePageNumber}`}</div>
      {nextAvailable && (
        <button
          onClick={onNext}
          className="bg-[#1b1d2098] pl-0.5 rounded-full fade-in aspect-square h-8 flex flex-row justify-center items-center transition-colors hover:bg-[#32333fb5]"
        >
          <img src={rightArrowWhite} />
        </button>
      )}
    </div>
  );
}

export default Paginator;
