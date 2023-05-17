import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/productCard";
import { v4 as uuidv4 } from "uuid"

// object setup
const product = { id: uuidv4(), brand: "corsair", model: "h500", price: "120", img: "" };


describe("product card", () => {
    it("render card with correct information", () => {
        render(<ProductCard product={product} />)
        expect(screen.getByRole("heading")).toHaveTextContent("h500");
        expect(screen.getByRole("button")).toHaveTextContent("add to cart");
    });

    it("clicking on add to cart button calls cart add function", () => {
        const handleCartAdd = jest.fn();

        render(<ProductCard product={product} handleCartAdd={handleCartAdd} />)

        userEvent.click(screen.getByRole("button"));
        userEvent.click(screen.getByRole("button"));

        expect(handleCartAdd).toHaveBeenCalledTimes(2);
    })
});