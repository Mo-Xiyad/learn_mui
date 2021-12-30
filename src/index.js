import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import { Provider } from "react-redux";
import configureStore, { persister } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <PersistGate persistor={persister}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
