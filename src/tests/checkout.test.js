import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Checkout from "../components/checkout";

const handleBackToCartMock = jest.fn();
const total = '100';

describe("checkout rendering", () => {
    it("renders checkout correctly", () => {
        render(<Checkout total={total} handleBackToCart={handleBackToCartMock} />);

        const buttons = screen.getAllByRole("button");

        expect(screen.getByText("Confirm to pay $100")).toBeInTheDocument();
        expect(buttons[0]).toHaveTextContent("Confirm your purchase");
        expect(buttons[1]).toHaveTextContent("back to cart");
    });

    it("back to cart button calls correct function", () => {
        render(<Checkout total={total} handleBackToCart={handleBackToCartMock} />);

        const buttons = screen.getAllByRole("button");

        userEvent.click(buttons[1]);
        expect(handleBackToCartMock).toHaveBeenCalled();
    });

    it("confirm purchase button changes state and shows payment processing", async () => {
        render(<Checkout total={total} />);

        const buttons = screen.getAllByRole("button");

        await userEvent.click(buttons[0]);

        expect(screen.getByText("Loading...")).toBeInTheDocument();

    });
});