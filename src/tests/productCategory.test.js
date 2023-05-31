import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Products from "../components/productCategory";
import { MemoryRouter } from "react-router-dom";

// Select element
describe("browse products page rendering", () => {
    it("renders select correctly", () => {
        render(<MemoryRouter><Products /></MemoryRouter>)
        expect(screen.getByRole("combobox")).toHaveLength(4);
    })

    it("changes value with user select", () => {
        render(<MemoryRouter><Products /></MemoryRouter>)
        userEvent.selectOptions(screen.getByRole("combobox"), "headsets")

        expect(screen.getByRole("combobox")).toHaveValue("headsets");

    })
});