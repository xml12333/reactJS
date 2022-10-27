import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./app/store";
import "./index.css";
import ToggleColorModeProvider from "./utils/ToggleColorMode";

export const muiCache = createCache({
  key: "mui",
  prepend: true,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CacheProvider value={muiCache}>
      <ToggleColorModeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleColorModeProvider>
    </CacheProvider>
    ,
  </Provider>,
);
