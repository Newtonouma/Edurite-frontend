import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
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
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={
              <ProtectedRoute requireAuth={false}>
                <Login/>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/signup" 
            element={
              <ProtectedRoute requireAuth={false}>
                <Signup showPasswordToggle={true} />
              </ProtectedRoute>
            } 
          />
          <Route path="/softwares" element={<SoftwaresPage />} />
          <Route path="/softwares/:slug" element={<SoftwareDetailsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/quotation" element={<QuotationPage />} />
          <Route path="/verify-otp/:userId" element={<OtpVerification />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
