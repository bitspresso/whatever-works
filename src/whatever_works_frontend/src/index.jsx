import React from "react";
import { whatever_works_backend } from "../../declarations/whatever_works_backend";
const { createRoot } = require("react-dom/client");

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <h1>Hello World</h1>
  </React.StrictMode>
);
