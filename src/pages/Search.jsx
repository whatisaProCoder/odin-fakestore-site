import useSearchProduct from "../hooks/useSearchProduct";
import ErrorPrompt from "../components/common/ErrorPrompt";
import Loader from "../components/common/Loader";
import ProductCard from "../components/shop/ProductCard";
import { useSearchParams } from "react-router";

function Search() {
  const [searchParams] = useSearchParams();

  const searchKey = searchParams.get("query");

  const { data, loading, error } = useSearchProduct(searchKey);

  const emptyResult = data.length === 0;

  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-[0.95rem]">
          Search results for : {searchKey}
        </div>
        {emptyResult && !loading && !error && (
          <div className="mt-36 flex flex-col items-center justify-center">
            <ErrorPrompt text={`No results for "${searchKey}"`} />
          </div>
        )}
        <div>
          {!loading && !error && !emptyResult && (
            <div className="mt-10 mb-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
              {data.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    productID={product.id}
                    image={product.images[0]}
                    title={product.title}
                    price={product.price}
                  />
                );
              })}
            </div>
          )}
          {loading && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <Loader text="Searching..." />
            </div>
          )}
          {!loading && error && (
            <div className="mt-36 flex flex-col items-center justify-center">
              <ErrorPrompt />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
