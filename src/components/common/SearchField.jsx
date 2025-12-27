import PropTypes from "prop-types";

import searchIcon from "../../assets/icons/search-icon.svg";
import { useMediaQuery } from "react-responsive";

function SearchField({ value, setValue, trigger }) {
  const isPhone = useMediaQuery({ maxWidth: 700 });
  return (
    <div
      className="flex flex-row items-center ml-2 border border-[#1B1C28] bg-[#0F1114] overflow-hidden"
      style={{ borderRadius: isPhone ? "1rem" : "0.25rem" }}
    >
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={setValue}
        className="inter outline-0 w-60 text-[14px] px-3"
      />
      <button
        onClick={trigger}
        className="bg-[#1B1C28] h-8.5 w-10 pl-0.5 flex flex-row justify-center items-center transition-colors hover:bg-[#1E1F2B] active:bg-[#181921]"
      >
        <img src={searchIcon} className="h-5" />
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
