import backIcon from "../../assets/icons/left-arrow-white.svg";

function BackButton({ onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={
        "flex flex-row bg-[#292c3098] px-4 py-2 gap-3 rounded-4xl transition-all hover:gap-5 " +
        className
      }
    >
      <img src={backIcon} alt="Go to previous page" className="w-2" />
      <div className="text-black poppins text-[0.9rem] font-medium white-text">
        Go Back
      </div>
    </button>
  );
}

export default BackButton;
