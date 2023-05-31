import { Link } from "react-router-dom"

function Confirmed() {
    return (
        <>
            <div className="confirmed">
                <h2>Thank you for your purchase!</h2>
                <Link to="/react-shopping-cart">Return to the home page.</Link>
            </div>
        </>
    )
}

export default Confirmed;