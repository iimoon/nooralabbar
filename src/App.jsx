import ContactForm from "./Components/ContactForm";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ServiceView from "./Components/ServiceView";
import StaticImageView from "./Components/StaticImageView";
import CommercialCleaning from "./Pages/CommercialCleaning";
import DummyPage from "./Pages/DummyPage";
import CommercialBanner from "./assets/images/banners/commercial.png";
import BuildingMaintenance from "./Pages/BuildingMaintenance";
import Demolition from "./Pages/Demolition";
import HolidayHome from "./Pages/HolidayHome";
import FacilitiesManagement from "./Pages/FacilitiesManagement";
import Test from "./Pages/Test";
import IndustrySpecific from "./Pages/IndustrySpecific";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="" element={<DummyPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/commercialcleaning" element={<CommercialCleaning/>}/>
          <Route path="/buildingmaintenance" element={<BuildingMaintenance/>}/>
          <Route path="/demolition" element={<Demolition/>}/>
          <Route path="/holidayhome" element={<HolidayHome/>}/>
          <Route path="/facilitiesmanagement" element={<FacilitiesManagement/>}/>
          <Route path="/industryspecific" element={<IndustrySpecific/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/services" element={<IndustrySpecific/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
