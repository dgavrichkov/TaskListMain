import { createMemoryHistory } from "history";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { rootReducer as reducer } from "../store/reducers";
import { ThemeProvider } from "styled-components";
import { THEMES } from "../constants/themes";
import { render } from "@testing-library/react";

export const renderApplication = (
  component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(reducer, initialState),
    theme = "dark",
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <ThemeProvider theme={THEMES[theme]}>{children}</ThemeProvider>
      </Router>
    </Provider>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
  };
};
