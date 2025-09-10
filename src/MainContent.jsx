/**  export default function MainComponent() {
  return (
    <main>
      <h1>Reasons i am excited to learn to React.</h1>
      <ol>
        <li>It will really help me to become a great software engineer </li>
        <li>I am curious about learning</li>
        <li>I love the space and logo</li>
        <li>it will help me become more employable.</li>
        <li>it will expand my knowledge on plain javascript</li>
      </ol>
    </main>
  );
}*/
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar";
import Main from "./main.jsx";
import "./index.css";
import App from "./App.jsx";

<StrictMode>
  <App />
</StrictMode>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Navbar />
    <Main />
  </>
);
