import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CartItem from "../components/cartItem";

// mock product
const product = { id: "101", brand: "corsair", model: "h500", price: "120", instanceId: "01", img: "" };

describe("cart item", () => {
    it("cart item rendering", () => {
        render(<CartItem product={product} />)

        expect(screen.getByRole("heading")).toHaveTextContent("h500");
        expect(screen.getByText("$120")).toBeInTheDocument();
    });

    it("cart remove function called with correct arguments", () => {
        const cartRemoveMock = jest.fn();

        render(<CartItem product={product} handleCartRemove={cartRemoveMock} />)

        userEvent.click(screen.getByRole("button"));

        expect(cartRemoveMock).toHaveBeenCalledWith("01");
    });
})