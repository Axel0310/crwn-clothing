import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import { use } from "react";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = use(CartContext);

    const addProductToCart = () => {
        addItemToCart(product)
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span>{price}€</span>
            </div>
            <Button onClick={addProductToCart} buttonType="inverted">Add to cart</Button>
        </div>
    )
};

export default ProductCard;