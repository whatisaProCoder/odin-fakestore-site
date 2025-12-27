import Brand from "../home/Brand";
import SearchField from "../common/SearchField";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-5 bg-[#121417] border-b border-[#0B0E13]">
      <div className="flex flex-row items-center gap-4">
        <Brand fontSize="1.125rem" />
        <SearchField />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
