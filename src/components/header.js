import { Link } from "react-router-dom";

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
                    <Link to="/shopping-cart"><div><ion-icon name="cart"></ion-icon><span className="cart-number">{cart.length}</span></div></Link>
                </nav>
            </header>
        </>
    )
}

export default Header;