import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import useUserProductDataCollection from "./hooks/useUserProductDataCollection";

function App() {
  const { userProductDataCollection, dataCollectionHelperMethods } =
    useUserProductDataCollection();

  const numberOfProductsInCart =
    dataCollectionHelperMethods.getProductsInCart().length;

  return (
    <div className="flex flex-col">
      <Header numberOfProductsInCart={numberOfProductsInCart} />
      <Outlet
        context={{ userProductDataCollection, dataCollectionHelperMethods }}
      />
    </div>
  );
}

export default App;
