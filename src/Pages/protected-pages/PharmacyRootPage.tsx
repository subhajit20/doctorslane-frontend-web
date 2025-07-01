import { Routes, Route } from "react-router-dom";
import ModuleContainer from "../../components/common/menu/ModuleContainer";

function PharmacyRootPage() {
  return (
    <Routes>
        <Route path="/dashboard" element={<ModuleContainer />}>
            <Route index element={<h1>hello World</h1>} />
        </Route>
    </Routes>
  )
}

export default PharmacyRootPage