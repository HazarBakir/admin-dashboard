import { Routes, Route } from "react-router-dom";
import { AdminLoginPage } from "./pages/Login/AdminLogin";
import { Admin } from "./pages/Admin/Admin";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AdminLoginPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;