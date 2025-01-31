import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
