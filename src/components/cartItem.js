
function CartItem({ product, handleCartRemove }) {
    return (
        <>
            <div className="cart-item">
                <h4>{product.model}</h4>
                <div><img src={product.img} alt=""></img></div>
                <p>${product.price}</p>
                <button onClick={() => handleCartRemove(product.instanceId)}>remove item</button>
            </div>
        </>
    )
}

export default CartItem;