import React from "react";
import "../assets/main.css";
import { whatever_works_backend } from "../../declarations/whatever_works_backend";
import RootLayout from "./layouts/rootLayout/rootLayout";
import HomePage from "./routes/homePage/homePage";
import FallbackPage from "./routes/fallbackPage/fallbackPage";
import {
  BrowserRouter,
  Route,
  Routes,
} from "../../../node_modules/react-router-dom/dist/index";
const { createRoot } = require("react-dom/client");

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prova" element={<HomePage />} />
          <Route path="*" element={<FallbackPage />} />
        </Routes>
      </BrowserRouter>
    </RootLayout>
  </React.StrictMode>
);
