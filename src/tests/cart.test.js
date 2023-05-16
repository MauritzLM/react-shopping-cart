import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingCart from "../components/cart";

// import memory router to wrap component - for link to work
import { MemoryRouter } from "react-router-dom";

// cart, handleCartRemove setup

// test correct rendering(when cart is empty and when not), test remove button* 
describe("shopping cart display", () => {
    it("shopping cart renders correctly when empty", () => {
        let cartRemoveMock = jest.fn();
        render(<MemoryRouter><ShoppingCart cart={[]} handleCartRemove={cartRemoveMock} /></MemoryRouter>)

        expect(screen.getByText("cart is empty")).toBeInTheDocument();
    })
})