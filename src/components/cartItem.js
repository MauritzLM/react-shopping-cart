
function CartItem({ product, handleCartRemove }) {
    return (
        <>
            <div>
                <h4>{product.model}</h4>
                <p>${product.price}</p>
                <button onClick={() => handleCartRemove(product.instanceId)}>remove item</button>
            </div>
        </>
    )
}

export default CartItem;