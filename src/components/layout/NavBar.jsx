import homeIcon from "../../assets/icons/home-icon.svg";
import shopIcon from "../../assets/icons/shop-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import NavItem from "./NavItem";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();

  const activeSection = useActiveSection();

  const checkAgainst = (current) => activeSection === current;

  return (
    <div className="flex flex-row gap-6">
      <NavItem active={checkAgainst("home")} onClick={() => navigate("/")}>
        <img src={homeIcon} className="w-3.5" />
        <div className="mt-1">Home</div>
      </NavItem>
      <NavItem active={checkAgainst("shop")} onClick={() => navigate("/shop")}>
        <img src={shopIcon} className="w-3.75" />
        <div className="mt-1">Shop</div>
      </NavItem>
      <NavItem active={checkAgainst("cart")} onClick={() => navigate("/cart")}>
        <img src={cartIcon} className="w-[1.1125rem]" />
        <div className="mt-1">Cart</div>
      </NavItem>
      <NavItem
        active={checkAgainst("wishlist")}
        onClick={() => navigate("/wishlist")}
      >
        <img src={heartIcon} className="w-[1.1125rem]" />
        <div className="mt-1">Wishlist</div>
      </NavItem>
    </div>
  );
}

export default NavBar;
