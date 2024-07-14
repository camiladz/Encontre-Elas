import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChangePageContentProvider } from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChangePageContentProvider>
      <App />
    </ChangePageContentProvider>
  </React.StrictMode>
);