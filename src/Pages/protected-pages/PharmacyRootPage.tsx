import { Routes, Route } from "react-router-dom";
import ModuleContainer from "../../components/common/menu/ModuleContainer";
import AppointmentPage from "./AppointmentPage";

function PharmacyRootPage() {
  return (
    <Routes>
        <Route path="/dashboard" element={<ModuleContainer />}>
            <Route index element={<h1>hello World</h1>} />
        </Route>
        <Route path="/appointments" element={<ModuleContainer />}>
            <Route index element={<AppointmentPage />} />
        </Route>
    </Routes>
  )
}

export default PharmacyRootPage