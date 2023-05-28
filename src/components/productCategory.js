import { useState } from "react";
// import { keyboards, mice, headsets, controllers } from "../inventory";
import ProductsContainer from "./productsContainer";
import { Link } from "react-router-dom";

function Products({ cart, handleCartAdd }) {
    const [category, setCategory] = useState("keyboards");

    function handleCategoryChange(event) {
        setCategory(event.target.value)
    }
    return (
        <>
            <div className="products-display">
                <h2>Browsing Products</h2>
                <label htmlFor="category-select">browse by category</label>
                <select name="category-select" id="category-select" value={category} onChange={handleCategoryChange}>
                    <option value="keyboards">keyboards</option>
                    <option value="mice">mice</option>
                    <option value="headsets">headsets</option>
                    <option value="controllers">controllers</option>
                </select>
                <Link to="/shopping-cart" className="view-cart">View cart</Link>
                <ProductsContainer category={category} cart={cart} handleCartAdd={handleCartAdd} />
            </div>
        </>
    )
};


export default Products;