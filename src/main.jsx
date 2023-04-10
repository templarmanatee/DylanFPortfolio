import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tailwind.css";
import Background from "./components/Background";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>
);
