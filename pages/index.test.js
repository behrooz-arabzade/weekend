import Home from "./index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders Home", () => {
    render(<Home />);

    // check if neccessary components are rendered
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
});
