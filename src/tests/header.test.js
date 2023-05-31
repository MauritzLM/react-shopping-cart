import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/header";
import { MemoryRouter } from "react-router-dom";

// cart setup
const cart = ["product1", "product2"];

describe("header renders correctly", () => {
    it("renders correct tabs", () => {
        render(<MemoryRouter><Header cart={cart} /></MemoryRouter>);

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/browse/i)).toBeInTheDocument();
    });

    it("renders correct amount of cart items", () => {
        render(<MemoryRouter><Header cart={cart} /></MemoryRouter>);

        const links = screen.getAllByRole("link");

        expect(links[2]).toHaveTextContent("2");
    });
});