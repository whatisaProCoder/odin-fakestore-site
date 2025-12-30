function HeroActionButton({ text, onClick, className }) {
  return (
    <button
      className={
        "bg-[#2573E9] poppins px-8 py-3 text-[1.1rem] max-sm:text-[0.9rem] font-medium transition-all hover:bg-[rgba(255,255,255,0.87)] hover:text-black" +
        " " +
        className
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default HeroActionButton;
