import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({product}) => {
    return (
        <div className="product-card-container">
            <img src={product.imageUrl} alt=""/>
            <div className="footer">
                <span className="name">{product.name}</span>
                <span className="price">{product.price}</span>
            </div>
            <Button>Click</Button>
        </div>
    )
};

export default ProductCard;