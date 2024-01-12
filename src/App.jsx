import "./styles/index.scss";
import "./styles/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
