import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { POS, Report, BillingQue, Inventory, Teams, Category } from "./pages";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<App />} />
        <Route path="/" element={<POS />} />
        <Route path="/report" element={<Report />} />
        <Route path="/activity/billing-que" element={<BillingQue />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/settings/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
