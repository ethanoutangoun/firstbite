import * as Sentry from "@sentry/react";
import React from "react";
import { Provider } from "react-redux";

import Routes from "./routes";
import configureStore from "./store";
import { AuthProvider } from "./utils/AuthContext";

const store = configureStore({});
const App = () => (
  <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Provider>
  </Sentry.ErrorBoundary>
);

export default App;
