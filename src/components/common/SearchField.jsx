import PropTypes from "prop-types";

import searchIcon from "../../assets/icons/search-icon.svg";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

function SearchField({ value, onChange, trigger }) {
  const inputRef = useRef(null);

  const isPhone = useMediaQuery({ maxWidth: 750 });

  const handleEnterKeyEvent = (e) => {
    if (e.key === "Enter") {
      trigger();
      inputRef.current.blur();
    }
  };

  return (
    <div
      className="w-70 max-md:w-full max-sm:p-0.5 flex flex-row items-center border border-[#3d3e49d0] rounded-md max-sm:rounded-full bg-[#22262db4] overflow-hidden"
      style={{
        marginLeft: isPhone ? "0" : "0.5rem",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        onKeyDown={handleEnterKeyEvent}
        className="inter outline-0 flex-1 text-[1rem] pl-4"
        style={{ width: isPhone ? "18rem" : "15rem" }}
      />
      <button
        onClick={trigger}
        className="bg-[#32333f] h-10 w-12 pl-0.5 max-md:bg-transparent max-md:border-l max-md:border-[#3d3e49d0] flex flex-row justify-center items-center transition-colors hover:bg-[#3d3e49d0]"
      >
        <img src={searchIcon} className="h-5 max-md:opacity-60" />
      </button>
    </div>
  );
}

SearchField.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  trigger: PropTypes.func,
};

export default SearchField;
