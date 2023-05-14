// card to display product information
// import { keyboards, mice, } from "../inventory";

function ProductCard({ product }) {
    return (
        <>
            <div>
                <h3>{product.model}</h3>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <button className="add-to-cart-btn">add to cart</button>
            </div>
        </>
    )
}


export default ProductCard;