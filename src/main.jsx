import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataContextProvider } from "./contexts/DataContext.jsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <DataContextProvider> */}
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
    {/* </DataContextProvider> */}
  </StrictMode>
);
