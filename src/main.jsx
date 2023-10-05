import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//redux slices
import toastMessageSlice from "./features/toastMessage";
import otpModalSlice from "./features/otpVerificationModal";
import tutorialModalSlice from "./features/tutorialModal";

const store = configureStore({
  reducer: {
    toastMessage: toastMessageSlice,
    otpModal: otpModalSlice,
    tutorialModal: tutorialModalSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
