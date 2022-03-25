import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { Header } from "./Header";
import { rootReducer } from "../store/reducers";

const store = createStore(rootReducer);

describe("header have elements", () => {
  it("header have title", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </Provider>
    );
    expect(getByText("ToDo")).toBeInTheDocument();
  });
});
