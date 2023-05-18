
import { useState } from "react";

function ProductCard({ product, category, handleCartAdd }) {
    const [numberOfItems, setNumberOfItems] = useState(1);

    function handleItemsChange(event) {
        setNumberOfItems(event.target.value);
    }

    return (
        <>
            <div>
                <h3>{product.model}</h3>
                <p>{product.brand}</p>
                <p>${product.price}</p>
                <label htmlFor="item-amount">no.</label>
                <input name="item-amount" type="number" min={1} step={1} onChange={(e) => handleItemsChange(e)} value={numberOfItems}></input>
                <button className="add-to-cart-btn" onClick={e => handleCartAdd(category, product.id, numberOfItems)}>add to cart</button>
            </div>
        </>
    )
}


export default ProductCard;