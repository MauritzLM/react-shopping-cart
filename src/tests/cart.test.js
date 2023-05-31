import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ShoppingCart from "../components/cart";

// import memory router to wrap component - for Link to work
import { MemoryRouter } from "react-router-dom";

// cart, handleCartRemove setup
const cartRemoveMock = jest.fn();
const cart = [{ id: "101", brand: "corsair", model: "h500", price: "120.75", img: "", instanceId: "01", },
{ id: "102", brand: "xbox", model: "series", price: "80.69", img: "", instanceId: "02" }];

const ShoppingCartTotal = ({ cart }) => {
    // calculate total
    const total = cart.reduce((accumulator, currentValue) =>
        accumulator + Number(currentValue.price), 0)
    return (
        <>
            <p data-testid="total">Total: ${total}</p>
        </>
    )
};

describe("shopping cart display", () => {
    it("shopping cart renders correctly when empty", () => {

        render(<MemoryRouter><ShoppingCart cart={[]} handleCartRemove={cartRemoveMock} /></MemoryRouter>);

        expect(screen.getByText("cart is empty")).toBeInTheDocument();
    });

    it("remove button calls cart remove function", () => {
        render(<MemoryRouter><ShoppingCart cart={cart} handleCartRemove={cartRemoveMock} /></MemoryRouter>);
        const buttons = screen.getAllByRole("button");

        userEvent.click(buttons[0]);

        expect(cartRemoveMock).toHaveBeenCalled();
    });

    it("renders cart items", () => {
        render(<MemoryRouter><ShoppingCart cart={cart} /></MemoryRouter>);

        expect(screen.getByText("h500")).toBeInTheDocument();
        expect(screen.getByText("series")).toBeInTheDocument();
    });

    it("calculates total and displays it correctly", () => {
        render(<ShoppingCartTotal cart={cart} />);

        expect(screen.getByTestId("total")).toHaveTextContent("Total: $201.44");
    });
});