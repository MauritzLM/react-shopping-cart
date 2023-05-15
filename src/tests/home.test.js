import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/home";

describe("Home component", () => {
    it("renders correct heading", () => {
        render(<Home />);
        expect(screen.getByRole("heading").textContent).toMatch(/home page/i);
    });
});