import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { store } from "./store";

dayjs.locale("vi");
dayjs.extend(relativeTime);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
