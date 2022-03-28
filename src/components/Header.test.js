import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderApplication } from "../utils/testUtils";

import { Header } from "./Header";

describe("header should have elements", () => {
  it("header should have title", () => {
    const { getByText } = renderApplication(<Header />);
    expect(getByText("ToDo")).toBeInTheDocument();
  });

  it("header should have two links", () => {
    const { getAllByRole } = renderApplication(<Header />);
    expect(getAllByRole("link")).toHaveLength(2);
  });
});
