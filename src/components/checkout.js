
import { useState } from "react"
import Confirmed from "./purchaseConfirmed";

function Checkout({ cart, total, handleBackToCart, handleConfirmedPayment }) {
    const [paymentMade, setPaymentMade] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handlePayment() {

        setIsLoading(true);

        await new Promise((resolve) => {
            setTimeout(() => resolve(setIsLoading(false)), 5000)
        });

        setPaymentMade(true);

        handleConfirmedPayment();
    }

    if (isLoading) {
        return (
            <>
                <div className="checkout">
                    <div className="spinner"></div>
                </div>
            </>
        )
    }

    if (paymentMade) {
        return (
            <>
                <div className="checkout">
                    <Confirmed />
                </div>

            </>
        )
    } else {
        return (
            <>
                <div className="checkout">
                    <p>Confirm to pay <span>${" "}{total}</span></p>
                    <div>
                        <button className="back-btn" onClick={() => handleBackToCart()}>back to cart</button>
                        <button className="confirm-btn" onClick={() => handlePayment()}>Confirm your purchase</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Checkout;