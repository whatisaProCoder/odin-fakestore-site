import homeIcon from "../../assets/icons/home-icon.svg";
import shopIcon from "../../assets/icons/shop-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import NavItem from "./NavItem";

import { useActivePage } from "../../context/ActivePageContext";

function NavBar() {
  const { activePage, setActivePage } = useActivePage();

  const checkAgainst = (current) => activePage === current;

  return (
    <div className="flex flex-row gap-6">
      <NavItem
        active={checkAgainst("home")}
        onClick={() => setActivePage("home")}
      >
        <img src={homeIcon} className="w-3.5" />
        <div className="mt-1">Home</div>
      </NavItem>
      <NavItem
        active={checkAgainst("shop")}
        onClick={() => setActivePage("shop")}
      >
        <img src={shopIcon} className="w-3.75" />
        <div className="mt-1">Shop</div>
      </NavItem>
      <NavItem
        active={checkAgainst("cart")}
        onClick={() => setActivePage("cart")}
      >
        <img src={cartIcon} className="w-[1.1125rem]" />
        <div className="mt-1">Cart</div>
      </NavItem>
      <NavItem
        active={checkAgainst("wishlist")}
        onClick={() => setActivePage("wishlist")}
      >
        <img src={heartIcon} className="w-[1.1125rem]" />
        <div className="mt-1">Wishlist</div>
      </NavItem>
    </div>
  );
}

export default NavBar;
