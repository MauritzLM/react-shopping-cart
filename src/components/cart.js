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
    let total = cart.reduce((accumulator, currentValue) =>
        accumulator + Number(currentValue.price), 0)

    // format total
    total = total.toFixed(2)

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
                    <h2>My cart</h2>
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
                    <h2>My cart</h2>
                    <div className="cart-items-container">
                        {cart.map((item, index) => {
                            return <CartItem product={item} key={index} handleCartRemove={handleCartRemove} />
                        })}
                    </div>
                    <p className="cart-total">Total: <span>${total}</span></p>
                    <div className="cart-options">
                        <Link to="/products">Continue shopping</Link>
                        <button onClick={() => handleCheckout()}>Proceed to checkout</button>
                    </div>
                </div>
            </>
        )
    }

}

export default ShoppingCart;