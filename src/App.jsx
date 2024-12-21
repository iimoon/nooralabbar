import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import MaintenancePage from "./Pages/MaintenancePage";

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path="*" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;