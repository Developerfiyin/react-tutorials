import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function Main() {
  return (
    <header>
      <img src="/src/assets/global.png" alt="The global logo" />
      <span>My travel Journal </span>
    </header>
  );
}
