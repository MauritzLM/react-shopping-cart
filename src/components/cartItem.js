
function CartItem({ product, handleCartRemove }) {
    return (
        <>
            <div className="cart-item">
                {/* <div className="cart-item-img"></div> */}
                <img src={product.img} alt=""></img>
                <div className="cart-item-info"><h4>{product.model}</h4>
                    <p>${product.price}</p></div>
                <button onClick={() => handleCartRemove(product.instanceId)}>remove item</button>
            </div>
        </>
    )
}

export default CartItem;