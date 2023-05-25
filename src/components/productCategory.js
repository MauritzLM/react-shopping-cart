import { useState } from "react";
// import { keyboards, mice, headsets, controllers } from "../inventory";
import ProductsContainer from "./productsContainer";

function Products({ cart, handleCartAdd }) {
    const [category, setCategory] = useState("keyboards");

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }
    return (
        <>
            <div className="products-display">
                <h1>Products</h1>
                <label htmlFor="category-select">browse by category</label>
                <select name="category-select" id="category-select" value={category} onChange={handleCategoryChange}>
                    <option value="keyboards">keyboards</option>
                    <option value="mice">mice</option>
                    <option value="headsets">headsets</option>
                    <option value="controllers">controllers</option>
                </select>
                <ProductsContainer category={category} cart={cart} handleCartAdd={handleCartAdd} />
            </div>
        </>
    )
};


export default Products;