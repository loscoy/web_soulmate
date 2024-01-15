import "./styles/index.scss";
import "./styles/tailwind.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <AppRoutes />
      </HashRouter>
    </>
  );
}

export default App;
