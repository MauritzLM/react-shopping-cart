import CartItem from "./cartItem";
import { Link } from "react-router-dom";

function ShoppingCart({ cart, handleCartRemove }) {

    if (!cart) {
        return (
            <>
                <div className="shopping-cart">
                    <h3>My cart</h3>
                    <p>cart is empty</p>
                    <Link to="/products">Continue shopping</Link>
                </div>
            </>
        )
    } else {
        // calculate total
        const total = cart.reduce((accumulator, currentValue) =>
            accumulator + Number(currentValue.price), 0)
        return (
            <>
                <div className="shopping-cart">
                    <h3>My cart</h3>
                    {cart.map((item, index) => {
                        return <CartItem product={item} key={index} handleCartRemove={handleCartRemove} />
                    })}
                    <p>total: ${total}</p>
                    <Link to="/products">Continue shopping</Link>
                </div>
            </>
        )
    }

}

export default ShoppingCart;