function AddToCartButton({ onClick, className, added }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: added ? "#E92556" : "#2573E9" }}
      className={
        className +
        " font-medium poppins text-[0.9rem] max-sm:text-[0.85rem] px-3 py-1 rounded-md transition-colors"
      }
    >
      {added ? "Remove" : "Add to cart"}
    </button>
  );
}

export default AddToCartButton;
