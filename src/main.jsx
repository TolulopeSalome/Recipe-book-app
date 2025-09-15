import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { RecipeProvider } from "./context/RecipeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <RecipeProvider>
      <App />
      </RecipeProvider>
    </BrowserRouter>

);
