import { Link } from "react-router-dom";

function Header({ cart }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/react-shopping-cart">Home</Link>
                        </li>
                        <li>
                            <Link to="/react-shopping-cart/products">Browse products</Link>
                        </li>
                    </ul>
                    <Link to="/react-shopping-cart/shopping-cart"><div><ion-icon name="cart"></ion-icon><span className="cart-number">{cart.length}</span></div></Link>
                </nav>
            </header>
        </>
    )
}

export default Header;