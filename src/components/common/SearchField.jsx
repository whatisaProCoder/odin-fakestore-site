import PropTypes from "prop-types";

import searchIcon from "../../assets/icons/search-icon.svg";
import { useMediaQuery } from "react-responsive";

function SearchField({ value, setValue, trigger }) {
  const isPhone = useMediaQuery({ maxWidth: 750 });
  return (
    <div
      className="flex flex-row items-center border-2 border-[#3d3e49d0] rounded-[1.25rem] bg-[#22262d] overflow-hidden"
      style={{
        marginLeft: isPhone ? "0" : "0.5rem",
      }}
    >
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={setValue}
        className="inter outline-0 w-60 text-[1rem] px-3"
        style={{ width: isPhone ? "18rem" : "15rem" }}
      />
      <button
        onClick={trigger}
        className="bg-[#32333f] h-10 w-12 pl-0.5 flex flex-row justify-center items-center transition-colors hover:bg-[#3d3e49d0]"
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
