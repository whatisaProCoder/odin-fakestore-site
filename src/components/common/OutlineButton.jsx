function PrimaryButton({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " text-[#468cf5] font-medium poppins text-md max-sm:text-sm px-3 py-1 border-2 border-[#468cf5] rounded-md"
      }
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
