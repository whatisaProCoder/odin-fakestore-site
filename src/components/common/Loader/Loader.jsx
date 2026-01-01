import "./style.css";

function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-row p-4 items-center justify-center gap-4 border rounded-full border-[#32333fb5]">
      <div className="border-[#447fdf] border-4 border-r-[#00000000] rounded-full h-7 w-7 spin bg-[#141414]" />
      <div className="inter text-center text-md max-sm:text-sm">{text}</div>
    </div>
  );
}

export default Loader;
