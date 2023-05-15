import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Products from "../components/productCategory";

// Select element
describe("browse products page", () => {
    it("renders select correctly", () => {
        render(<Products />)
        expect(screen.getByRole("combobox")).toHaveLength(4);
    })

    it("changes value with user select", () => {
        render(<Products />)
        userEvent.selectOptions(screen.getByRole("combobox"), "headsets")

        expect(screen.getByRole("combobox")).toHaveValue("headsets");

    })
});