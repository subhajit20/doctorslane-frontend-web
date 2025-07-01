import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/root-non-protectedpages/LoginPage';
import DoctorLoginPage from './Pages/root-non-protectedpages/DoctorLoginPage';
import PharmacyLoginPage from './Pages/root-non-protectedpages/PharmacyLoginPage';
import PharmacyRootPage from './Pages/protected-pages/PharmacyRootPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/doctor-login" element={<DoctorLoginPage />} />
        <Route path="/pharmacy-login" element={<PharmacyLoginPage />} />

        <Route path="/pharmacy/*" element={<PharmacyRootPage />} />
        
        {/* Pharmacy Dashboard Routes */}
        {/* <Route path="/pharmacy/dashboard" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/appointments" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/doctors" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/patients" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/prescriptions" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/inventory" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/reports" element={<PharmacyDashboard />} />
        <Route path="/pharmacy/settings" element={<PharmacyDashboard />} /> */}
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  )
}

export default App
