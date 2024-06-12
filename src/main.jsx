/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { useEffect } from "react";
import { logPageView } from "./gtag";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "G-HN9RY72NPF"; // Ganti dengan Tracking ID kamu

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
