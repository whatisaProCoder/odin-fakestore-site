import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import { useState } from "react";
import UserProductData from "./models/userProductData";

function App() {
  const [userProductDataCollection, setUserProductDataCollection] = useState(
    []
  );

  return (
    <div className="flex flex-col">
      <Header />
      <Outlet
        context={{ userProductDataCollection, setUserProductDataCollection }}
      />
    </div>
  );
}

export default App;
