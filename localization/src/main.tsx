import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoadingSpinner from "./components/loadingSpinner.tsx";
import "./i18n.js";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner/>}>
      <App />
    </Suspense>
  </StrictMode>
);
