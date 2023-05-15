import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductsContainer from "../components/productsContainer";
import { inventory } from "../inventory";

// renders correct category
describe("category browse", () => {
    it("renders correct category", () => {
        render(<ProductsContainer category={"controllers"} />)
        expect(screen.getByText("controllers")).toBeInTheDocument();
    })
})