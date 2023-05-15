import { Link } from "react-router-dom";

// pass cart state as props*
function Header({ cart }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Browse products</Link>
                        </li>
                    </ul>
                    <Link to="/shopping-cart"><div>cart items: {cart.length}</div></Link>
                </nav>
            </header>
        </>
    )
}

export default Header;