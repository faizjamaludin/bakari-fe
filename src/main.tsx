import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { BillingQue, OrderHistory, POS, Tables } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<POS />} />
        {/* Activity */}
        <Route path="/activity/billing-queue" element={<BillingQue />} />
        <Route path="/activity/tables" element={<Tables />} />
        <Route path="/activity/order-history" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
