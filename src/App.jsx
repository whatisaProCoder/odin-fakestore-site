import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
