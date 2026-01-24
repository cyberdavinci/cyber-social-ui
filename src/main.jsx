import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.jsx or your App file
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "347541415893-mjgvspqnsi6com56jfsrcm2nf1ud8a9m.apps.googleusercontent.com"; // Put your real ID here

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
      <ToastContainer />
    </GoogleOAuthProvider>
  </BrowserRouter>,
);
