import homeIcon from "../../assets/icons/home-icon.svg";
import shopIcon from "../../assets/icons/shop-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import NavItem from "./NavItem";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

function NavBar() {
  const isTablet = useMediaQuery({ minWidth: 750, maxWidth: 900 });

  const isSmallPhone = useMediaQuery({ maxWidth: 550 });

  const navigate = useNavigate();

  const activeSection = useActiveSection();

  const checkAgainst = (current) => activeSection === current;

  return (
    <div
      className="flex flex-row"
      style={{ gap: isSmallPhone ? "1.75rem" : "1.5rem" }}
    >
      <NavItem active={checkAgainst("home")} onClick={() => navigate("/")}>
        <img src={homeIcon} className="w-3.75" />
        {!isTablet && !isSmallPhone && <div>Home</div>}
      </NavItem>
      <NavItem active={checkAgainst("shop")} onClick={() => navigate("/shop")}>
        <img src={shopIcon} className="w-[1.05rem]" />
        {!isTablet && !isSmallPhone && <div>Shop</div>}
      </NavItem>
      <NavItem active={checkAgainst("cart")} onClick={() => navigate("/cart")}>
        <img src={cartIcon} className="w-[1.32rem]" />
        <div
          className="inter absolute bg-[#2573E9] border border-[#1b1d20] h-4.75 text-center aspect-square rounded-full text-[0.75rem] font-medium"
          style={{ translate: "0.75rem -0.8rem" }}
        >
          2
        </div>
        {!isTablet && !isSmallPhone && <div>Cart</div>}
      </NavItem>
      <NavItem
        active={checkAgainst("wishlist")}
        onClick={() => navigate("/wishlist")}
      >
        <img src={heartIcon} className="w-4.5" />
        {!isTablet && !isSmallPhone && <div>Wishlist</div>}
      </NavItem>
    </div>
  );
}

export default NavBar;
