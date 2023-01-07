import React from "react";
import { App } from "App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import { GlobalStyles } from "ui";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
);
