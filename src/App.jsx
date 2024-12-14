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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<DummyPage/>}/>
          
          <Route path="/services" element={<IndustrySpecific/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
