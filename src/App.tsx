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
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  )
}

export default App
