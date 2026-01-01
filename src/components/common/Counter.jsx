import minusIcon from "../../assets/icons/minus-icon.svg";
import plusIcon from "../../assets/icons/plus-icon.svg";

function Counter({ className, value, onNext, onPrev }) {
  return (
    <div
      className={
        className +
        " select-none bg-[#292c3098] border border-[#32333fb5] p-0.5 rounded-md flex flex-row justify-between items-center"
      }
    >
      <button
        onClick={onPrev}
        className="h-6 aspect-square rounded-sm flex flex-row justify-center items-center transition-colors hover:bg-[#32333fb5]"
      >
        <img src={minusIcon} />
      </button>

      <div className="mx-4 flex-1 text-center inter text-md font-semibold max-sm:text-sm">
        {value}
      </div>

      <button
        onClick={onNext}
        className="h-6 aspect-square rounded-sm flex flex-row justify-center items-center transition-colors hover:bg-[#32333fb5]"
      >
        <img src={plusIcon} />
      </button>
    </div>
  );
}

export default Counter;
