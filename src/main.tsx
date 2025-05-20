import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { POS } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POS />} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
