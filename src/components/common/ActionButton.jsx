function ActionButton({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex flex-row white-bg px-9 py-3 gap-3 rounded-4xl transition-all hover:gap-5 " +
        className
      }
    >
      <div className="text-black inter text-md font-bold">{text}</div>
    </button>
  );
}

export default ActionButton;
