import { useState } from "react";
// import { keyboards, mice, headsets, controllers } from "../inventory";
import ProductsContainer from "./productsContainer";

function Products() {
    const [category, setCategory] = useState("keyboards");

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }
    return (
        <>
            <h1>Products</h1>
            <label htmlFor="category-select">select a category</label>
            <select name="category-select" value={category} onChange={handleCategoryChange}>
                <option value="keyboards">keyboards</option>
                <option value="mice">mice</option>
                <option value="headsets">headsets</option>
                <option value="controllers">controllers</option>
            </select>
            <ProductsContainer category={category} />
        </>
    )
}


export default Products;