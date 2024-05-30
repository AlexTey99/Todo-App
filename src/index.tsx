import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainContainer } from "./containers/MainContainer";
import { App } from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <MainContainer />
  </StrictMode>
);
