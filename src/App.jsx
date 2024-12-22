import MaintenancePage from "./Pages/MaintenancePage"; // Assuming it's for maintenance services
import ContactUs from "./Pages/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          {/* Root route goes to ContactUs */}
          <Route path="/" element={<ContactUs />} />
          
          {/* Specific ContactUs route */}
          <Route path="/contactus" element={<ContactUs />} />
          
          {/* Redirect all other routes to MaintenancePage */}
          <Route path="*" element={<MaintenancePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
