import shirtExample from "../../assets/images/clothes-example.jpeg";

function ExclusiveDealsCard() {
  return (
    <div className="bg-[#1b1d20] flex flex-col p-2 border border-[#32333fb5] rounded-md max-sm:rounded-xl transition-all hover:drop-shadow-xl hover:-translate-y-1">
      <img src={shirtExample} className="rounded-xs max-sm:rounded-md" />
      <div className="flex flex-col gap-4 p-3">
        <div className="inter text-[1rem] max-sm:text-sm font-semibold">
          Sleek Olive Green Hardshell Carry-On Luggage
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="inter text-md max-sm:text-[0.9rem] font-bold">
            $ 48
          </div>
          <div className="select-none px-3 py-1 bg-[#182436] border border-[#2573E9] text-[#2573E9] rounded-2xl poppins text-[0.9rem] max-sm:text-[0.8rem] font-medium transition-colors hover:text-[#5397fe] hover:border-[#5397fe]">
            Open Details
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExclusiveDealsCard;
