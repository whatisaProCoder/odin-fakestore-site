function AddToCartButton({
  onClick,
  className,
  added,
  textWhenAdded = "Remove",
  textWhenNotAdded = "Add to cart",
}) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: added ? "#E92556" : "#2573E9" }}
      className={
        className +
        " font-medium poppins text-[0.9rem] max-sm:text-[0.85rem] px-3 py-1 rounded-md transition-colors"
      }
    >
      {added ? textWhenAdded : textWhenNotAdded}
    </button>
  );
}

export default AddToCartButton;
