import heartIcon from "../../assets/icons/heart-icon.svg";

function AddToWishlistButton({ onClick, className, added }) {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " font-medium poppins text-[0.9rem] max-sm:text-[0.85rem] px-3 py-1 rounded-md transition-colors flex flex-row items-center justify-center gap-3 border border-[#E92556] text-[#E92556]"
      }
    >
      <img src={heartIcon} alt="Wishlist Button" className="w-4" />
      {added ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
}

export default AddToWishlistButton;
