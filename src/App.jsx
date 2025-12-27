import "./App.css";
import Header from "./components/layout/Header";
import { ActivePageProvider } from "./context/ActivePageContext";

function App() {
  return (
    <ActivePageProvider>
      <Header />
    </ActivePageProvider>
  );
}

export default App;
