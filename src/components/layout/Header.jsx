import Brand from "../home/Brand";
import SearchField from "../common/SearchField";
import NavBar from "./NavBar";
import { useMediaQuery } from "react-responsive";

function Header({ numberOfProductsInCart }) {
  const isPhone = useMediaQuery({ maxWidth: 750 });

  return (
    <div
      style={{
        flexDirection: isPhone ? "column" : "row",
        paddingTop: isPhone ? "1.5rem" : "0",
        gap: isPhone ? "0.375rem" : "0",
      }}
      className="sticky top-0 max-sm:-top-13 left-0 right-0 z-10 flex justify-between items-center px-5 bg-[#1b1d20] border-b border-[#32333fb5] drop-shadow-md"
    >
      <div
        className="flex items-center gap-4"
        style={{ flexDirection: isPhone ? "column" : "row" }}
      >
        <Brand fontSize={isPhone ? "1.5rem" : "1.25rem"} />
        <SearchField />
      </div>
      <NavBar numberOfProductsInCart={numberOfProductsInCart} />
    </div>
  );
}

export default Header;
