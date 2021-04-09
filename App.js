import React from "react";
import { Provider } from "react-redux";
import CounterPage from "./src/pages/CounterPage";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <CounterPage />
    </Provider>
  );
}
