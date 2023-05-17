import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../components/cart";

// import memory router to wrap component - for link to work
import { MemoryRouter } from "react-router-dom";

// cart, handleCartRemove setup
let cartRemoveMock = jest.fn();

// test correct rendering(when cart is empty and when not), test remove button* 
describe("shopping cart display", () => {
    it("shopping cart renders correctly when empty", () => {

        render(<MemoryRouter><ShoppingCart cart={[]} handleCartRemove={cartRemoveMock} /></MemoryRouter>)

        expect(screen.getByText("cart is empty")).toBeInTheDocument();
    })

    it("remove button calls cart remove function", () => {
        render(<MemoryRouter><ShoppingCart cart={[{ model: "ps5" }]} handleCartRemove={cartRemoveMock} /></MemoryRouter>);
        userEvent.click(screen.getByRole("button"));

        expect(cartRemoveMock).toHaveBeenCalled();
    })
})