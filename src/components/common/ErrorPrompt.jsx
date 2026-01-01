import errorIcon from "../../assets/icons/error-icon.svg";

function ErrorPrompt({ text = "Sorry, we're encountering some problem." }) {
  return (
    <div className="flex flex-row max-sm:flex-col p-4 items-center justify-center gap-4 border rounded-full max-sm:rounded-xl border-[#32333fb5]">
      <img src={errorIcon} alt="Error" className="w-8" />
      <div className="inter text-center text-md max-sm:text-sm">{text}</div>
    </div>
  );
}

export default ErrorPrompt;
