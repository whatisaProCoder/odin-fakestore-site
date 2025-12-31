import ExclusiveDealsCard from "./ExclusiveDealsCard";

function ExclusiveDeals() {
  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center bg-[#14161a]">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-md">
          Exclusive Deals
        </div>
        <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          <ExclusiveDealsCard />
          <ExclusiveDealsCard />
          <ExclusiveDealsCard />
          <ExclusiveDealsCard />
        </div>
      </div>
    </div>
  );
}

export default ExclusiveDeals;
