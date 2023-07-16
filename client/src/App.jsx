import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GuiasPage } from "./pages/GuiasPage";
import { GuiasFormPage } from "./pages/GuiasFormPage";
import { Navigation } from "./components/Navigation";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/guias"/>} />
        <Route path="/guias" element={<GuiasPage/>} />
        <Route path="/guias-create" element={<GuiasFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;