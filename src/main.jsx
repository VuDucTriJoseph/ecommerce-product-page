import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/main.scss";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
);
