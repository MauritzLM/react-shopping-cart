import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkout from "../components/checkout";


const handleBackToCartMock = jest.fn();
const total = '100';

// mock confirmed component* (import then mock)

describe("checkout rendering", () => {
    it("renders checkout correctly", () => {
        render(<Checkout total={total} handleBackToCart={handleBackToCartMock} />);

        const buttons = screen.getAllByRole("button");

        expect(screen.getByText("Confirm to pay $100")).toBeInTheDocument();
        expect(buttons[0]).toHaveTextContent("Confirm your purchase");
        expect(buttons[1]).toHaveTextContent("back to cart");
    });

});