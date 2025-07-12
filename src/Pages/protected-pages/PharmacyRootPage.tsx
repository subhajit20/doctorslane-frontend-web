import { Routes, Route } from "react-router-dom";
import ModuleContainer from "../../components/common/menu/ModuleContainer";
import AppointmentPage from "./AppointmentPage";

// Pharmacy Route Page
// This page serves as the root for all pharmacy-related routes
function PharmacyRootPage() {
  return (
    <Routes>
        <Route element={<ModuleContainer />}>
            <Route path="dashboard" element={<h1>hello World</h1>} />
            <Route path="appointments" element={<AppointmentPage />} />
        </Route>
    </Routes>
  )
}

export default PharmacyRootPage