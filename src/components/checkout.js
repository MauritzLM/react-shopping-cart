
import { useState } from "react"
import Confirmed from "./purchaseConfirmed";

function Checkout({ cart, total, handleBackToCart, handleConfirmedPayment }) {
    const [paymentMade, setPaymentMade] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handlePayment() {

        setIsLoading(true);

        await new Promise((resolve) => {
            setTimeout(() => resolve(setIsLoading(false)), 2000)
        });

        setPaymentMade(true);

        handleConfirmedPayment();
    }

    if (isLoading) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }

    if (paymentMade) {
        return (
            <>
                <Confirmed />
            </>
        )
    } else {
        return (
            <>
                <div>
                    <p>Confirm to pay ${total}</p>
                    <button className="confirm-btn" onClick={() => handlePayment()}>Confirm your purchase</button>
                    <button onClick={() => handleBackToCart()}>back to cart</button>
                </div>
            </>
        )
    }
}

export default Checkout;