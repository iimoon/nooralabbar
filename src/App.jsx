import CommercialCleaning from "./Pages/CommercialCleaning";
import MainPage from "./Pages/MainPage";
import BuildingMaintenance from "./Pages/BuildingMaintenance";
import Demolition from "./Pages/Demolition";
import HolidayHome from "./Pages/HolidayHome";
import FacilitiesManagement from "./Pages/FacilitiesManagement";
import IndustrySpecific from "./Pages/IndustrySpecific";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import TradingProducts from "./Pages/TradingProducts";

function App() {
  return (
    <>
      <Analytics/>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route path="" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/commercialcleaning" element={<CommercialCleaning />} />
          <Route
            path="/buildingmaintenance"
            element={<BuildingMaintenance />}
          />
          <Route path="/demolition" element={<Demolition />} />
          <Route path="/holidayhome" element={<HolidayHome />} />
          <Route
            path="/facilitiesmanagement"
            element={<FacilitiesManagement />}
          />
          <Route path="/tradingproducts" element={<TradingProducts />} />
          <Route path="/industryspecific" element={<IndustrySpecific />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/services" element={<IndustrySpecific />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;