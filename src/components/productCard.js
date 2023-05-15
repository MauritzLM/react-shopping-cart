
function ProductCard({ product, category, handleCartAdd }) {
    return (
        <>
            <div>
                <h3>{product.model}</h3>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                <button className="add-to-cart-btn" onClick={e => handleCartAdd(category, product.id)}>add to cart</button>
            </div>
        </>
    )
}


export default ProductCard;