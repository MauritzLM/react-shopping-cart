import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
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

    // test add to cart button*
});