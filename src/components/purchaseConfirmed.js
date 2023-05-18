import { Link } from "react-router-dom"

function Confirmed() {
    return (
        <>
            <div>
                <h2>Thank you for your purchase.</h2>
                <Link to="/">Return to the home page.</Link>
            </div>
        </>
    )
}

export default Confirmed;