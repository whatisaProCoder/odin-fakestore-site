import Brand from "../home/Brand";
import SearchField from "../common/SearchField";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isPhone = useMediaQuery({ maxWidth: 700 });

  return (
    <div
      style={{
        flexDirection: isPhone ? "column" : "row",
        paddingTop: isPhone ? "1.5rem" : "0",
        gap: isPhone ? "1rem" : "0",
      }}
      className="sticky top-0 left-0 right-0 flex justify-between items-center px-5 bg-[#131518] border-b border-[#0B0E13]"
    >
      <div
        className="flex items-center gap-4"
        style={{ flexDirection: isPhone ? "column" : "row" }}
      >
        <Brand fontSize={isPhone ? "1.5rem" : "1.125rem"} />
        <SearchField />
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
