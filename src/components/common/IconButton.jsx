function IconButton({ iconSrc, text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex flex-row white-bg px-5 py-3 gap-3 rounded-4xl transition-all hover:gap-5 " +
        className
      }
    >
      <img src={iconSrc} alt={`${text} Button`} className="w-2" />
      <div className="text-black poppins text-[0.9rem] font-medium">{text}</div>
    </button>
  );
}

export default IconButton;
