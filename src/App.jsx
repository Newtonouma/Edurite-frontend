import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Login from "./pages/aurth/login"
import Signup from "./pages/aurth/signup";
import SoftwaresPage from "./pages/SoftwaresPage";
import SoftwareDetailsPage from "./pages/SoftwareDetailsPage";
import SupportPage from "./pages/SupportPage";
import QuotationPage from './pages/QuotationPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/softwares" element={<SoftwaresPage />} />
        <Route path="/softwares/:slug" element={<SoftwareDetailsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/quotation" element={<QuotationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
