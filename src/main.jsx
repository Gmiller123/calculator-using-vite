import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CalculatorComp from "../context/calculator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalculatorComp>
      <App />
    </CalculatorComp>
  </React.StrictMode>
);
