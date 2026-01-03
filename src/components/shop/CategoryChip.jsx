function CategoryChip({ text, onClick, active, className }) {
  return (
    <div
      onClick={onClick}
      className={
        className +
        " select-none px-3 max-sm:px-2 max-sm:mb-1 py-1 border border-[#32333fb5] rounded-2xl inter text-md max-sm:text-xs font-medium transition-colors bg-[#1b1d20] hover:bg-[#1b1d20]"
      }
      style={{
        color: active ? "black" : "rgba(255,255,255,0.87)",
        backgroundColor: active ? "rgba(255,255,255,0.87)" : "#1b1d20",
      }}
    >
      {text}
    </div>
  );
}

export default CategoryChip;
