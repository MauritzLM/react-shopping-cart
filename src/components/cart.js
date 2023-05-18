import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import Checkout from "./checkout";

function ShoppingCart({ cart, handleCartRemove, handleConfirmedPayment }) {
    const [checkout, setCheckout] = useState(false);

    function handleCheckout() {
        setCheckout(true);
    }

    function handleBackToCart() {
        setCheckout(false);
    }

    // calculate total
    const total = cart.reduce((accumulator, currentValue) =>
        accumulator + Number(currentValue.price), 0)

    if (checkout) {
        return (
            <>
                <Checkout total={total} handleBackToCart={handleBackToCart} handleConfirmedPayment={handleConfirmedPayment} />
            </>
        )
    }
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
    }
    else {
        return (
            <>
                <div className="shopping-cart">
                    <h3>My cart</h3>
                    {cart.map((item, index) => {
                        return <CartItem product={item} key={index} handleCartRemove={handleCartRemove} />
                    })}
                    <p>Total: ${total}</p>
                    <Link to="/products">Continue shopping</Link>
                    <button onClick={() => handleCheckout()}>Proceed to checkout</button>
                </div>
            </>
        )
    }

}

export default ShoppingCart;