import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
