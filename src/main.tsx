import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorProvider } from "./context/ColorContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ColorProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ColorProvider>
);
