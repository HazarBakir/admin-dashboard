import { Routes, Route } from "react-router-dom";
import {AdminLoginPage} from "./pages/adminLoginPage";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AdminLoginPage />} />
      </Routes>
    </>
  );
}

export default App;
