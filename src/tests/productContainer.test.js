import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsContainer from "../components/productsContainer";


const handleCartAdd = jest.fn();
const cart = [];

// renders correct category
describe("category browse", () => {
    it("renders correct category", () => {
        render(<ProductsContainer category={"controllers"} />)
        expect(screen.getByText("controllers")).toBeInTheDocument();
        expect(screen.queryByText("k500")).not.toBeInTheDocument();
    })

    // renders all items in category
    it("renders all items in category", () => {
        render(<ProductsContainer category={"controllers"} cart={cart} handleCartAdd={handleCartAdd} />)

        expect(screen.getByText("ps5")).toBeInTheDocument();
        expect(screen.getByText("series")).toBeInTheDocument();
    })
})