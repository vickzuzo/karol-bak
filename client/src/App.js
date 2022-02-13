import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./state/store/store.config";
import "./styles/styles.scss";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
