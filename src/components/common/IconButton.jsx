function IconButton({ iconSrc, text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex flex-row white-bg px-6 py-3 gap-3 rounded-4xl transition-all hover:gap-6 " +
        className
      }
    >
      <img src={iconSrc} alt={`${text} Button`} className="w-2.5" />
      <div className="text-black poppins text-[1.125rem] font-medium">
        {text}
      </div>
    </button>
  );
}

export default IconButton;
