import { inventory } from "../inventory";
import ProductCard from "./productCard";

function ProductsContainer({ category }) {
    // get category from inventory
    return (
        <>
            <div className="products-container">
                {
                    inventory[category].map(item => {
                        return <ProductCard product={item} key={item.id} />
                    })
                }
            </div>
        </>
    )
}

export default ProductsContainer;