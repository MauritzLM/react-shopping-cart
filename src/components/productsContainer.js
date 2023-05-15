import { inventory } from "../inventory";
import ProductCard from "./productCard";

function ProductsContainer({ category, cart, handleCartAdd }) {
    // get category from inventory
    return (
        <>
            <h2>{category}</h2>
            <div className="products-container">
                {
                    inventory[category].map(item => {
                        return <ProductCard product={item} key={item.id} cart={cart} handleCartAdd={handleCartAdd} category={category} />
                    })
                }
            </div>
        </>
    )
}

export default ProductsContainer;