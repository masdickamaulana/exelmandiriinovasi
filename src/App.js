import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CompanyProfile from "./pages/CompanyProfile";
import VisionMission from "./pages/VisionMission";
import Awards from "./pages/Awards";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import CSR from "./pages/CSR";
import Footer from "./components/Footer";
import "./styles/global.css"; 

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content" style={{ paddingTop: "65px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-profile" element={<CompanyProfile/>} />
          <Route path="/vision-mission" element={<VisionMission/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/csr" element={<CSR/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
