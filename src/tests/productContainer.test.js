import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductsContainer from "../components/productsContainer";

const handleCartAdd = jest.fn();
const cart = [];

// renders correct category
describe("category browse", () => {
    it("renders correct category", () => {
        render(<ProductsContainer category={"keyboards"} />)
        expect(screen.queryByText("ps4 Camo")).not.toBeInTheDocument();
    });

    // renders all items in category
    it("renders all items in category", () => {
        render(<ProductsContainer category={"keyboards"} cart={cart} handleCartAdd={handleCartAdd} />)

        expect(screen.getByText("Tenkeyless")).toBeInTheDocument();
        expect(screen.getByText("TUF Gaming")).toBeInTheDocument();
        expect(screen.getByText("CK721")).toBeInTheDocument();
        expect(screen.getByText("TKL SE")).toBeInTheDocument();
    });
});