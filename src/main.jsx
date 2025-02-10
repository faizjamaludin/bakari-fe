import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  POS,
  Report,
  BillingQue,
  Teams,
  Category,
  Login,
  OrderHistory,
  Tables,
  AllProducts,
} from "./pages";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./lib/features/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<POS />} />
          <Route path="/report" element={<Report />} />
          <Route path="/activity/billing-que" element={<BillingQue />} />
          <Route path="/activity/order-history" element={<OrderHistory />} />
          <Route path="/activity/tables" element={<Tables />} />
          <Route path="/inventory/all-products" element={<AllProducts />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/settings/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
