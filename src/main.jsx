import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import RecetaForm from "./pages/RecetaForm";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/receta" element={<RecetaForm />} />
    </Routes>
  </BrowserRouter>

);
