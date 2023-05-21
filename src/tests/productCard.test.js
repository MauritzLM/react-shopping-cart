import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/productCard";

// object setup
const product = { id: "101", brand: "corsair", model: "h500", price: "120", img: "" };


describe("product card", () => {
    it("render card with correct information", () => {
        render(<ProductCard product={product} />)
        expect(screen.getByRole("heading")).toHaveTextContent("h500");
        expect(screen.getByRole("button")).toHaveTextContent("add to cart");
    });

    it("input value changes with user input", () => {
        // const user = userEvent.setup()

        render(<ProductCard product={product} />)

        const input = screen.getByRole("spinbutton");

        fireEvent.change(input, { target: { value: "4" } });

        expect(input).toHaveValue(4);
    });

    it("calls add to cart function with correct arguments", () => {
        const handleCartAddMock = jest.fn();

        render(<ProductCard category={"keyboards"} product={product} handleCartAdd={handleCartAddMock} />)

        const input = screen.getByRole("spinbutton");

        fireEvent.change(input, { target: { value: "4" } });

        userEvent.click(screen.getByRole("button"));

        expect(handleCartAddMock).toHaveBeenCalledWith("keyboards", "101", "4");
    });

});