import { ExclusiveDealProductIDs } from "../../constants/exclusiveDeals";
import useMultipleProducts from "../../hooks/useMultipleProducts";
import ErrorPrompt from "../common/ErrorPrompt";
import Loader from "../common/Loader";
import ExclusiveDealsCard from "./ExclusiveDealsCard";

function ExclusiveDeals() {
  const { data, loading, error } = useMultipleProducts(ExclusiveDealProductIDs);

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center bg-[#14161a]">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-md">
          Exclusive Deals
        </div>
        <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {!loading &&
            !error &&
            data.map((product) => {
              return (
                <ExclusiveDealsCard
                  key={product.id}
                  productID={product.id}
                  image={product.images[0]}
                  title={product.title}
                  price={product.price}
                />
              );
            })}
          {loading && (
            <div className="mt-10 flex flex-col items-center justify-center">
              <Loader text="Loading the products..." />
            </div>
          )}
          {!loading && error && (
            <div className="mt-10 flex flex-col items-center justify-center">
              <ErrorPrompt />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExclusiveDeals;
