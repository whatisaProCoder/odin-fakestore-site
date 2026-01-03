import { useNavigate } from "react-router";

function SimpleProductCard({ productID, image, title, price }) {
  const navigate = useNavigate();

  const handleOpenDetails = () => {
    navigate(`/product/${productID}`);
  };

  return (
    <div className="fade-in bg-[#1b1d20] flex flex-col p-2 border border-[#32333fb5] rounded-md max-sm:rounded-xl transition-all duration-300 hover:drop-shadow-xl hover:-translate-y-1">
      <img
        src={image}
        className="rounded-xs max-sm:rounded-md bg-[rgba(255,255,255,0.87)] aspect-square"
      />
      <div className="flex-1 flex flex-col gap-4 p-3">
        <div className="flex-1 inter text-[1rem] max-sm:text-sm font-semibold">
          {title}
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="inter text-md max-sm:text-[0.9rem] font-bold">
            $ {price}
          </div>
          <button
            onClick={handleOpenDetails}
            className="select-none px-3 py-1 bg-[#182436] border border-[#2573E9] text-[#2573E9] rounded-2xl poppins text-[0.9rem] max-sm:text-[0.8rem] font-medium transition-colors hover:text-[#5397fe] hover:border-[#5397fe]"
          >
            Open Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleProductCard;
