import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Login from "./pages/aurth/login"
import Signup from "./pages/aurth/signup";
import SoftwaresPage from "./pages/softwares/SoftwaresPage";
import SoftwareDetailsPage from "./pages/softwares/SoftwareDetailsPage";
import SupportPage from "./pages/support/SupportPage";
import QuotationPage from './pages/quotation/QuotationPage';
import OtpVerification from './pages/aurth/OtpVerification';
import Dashboard from './pages/dashboard/Dashboard';
import AdminLayout from './pages/admin/AdminLayout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup showPasswordToggle={true} />} />
        <Route path="/softwares" element={<SoftwaresPage />} />
        <Route path="/softwares/:slug" element={<SoftwareDetailsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/quotation" element={<QuotationPage />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
