import CartItem from "./cartItem";
import { Link } from "react-router-dom";

function ShoppingCart({ cart, handleCartRemove, total }) {

    if (!cart.length) {
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