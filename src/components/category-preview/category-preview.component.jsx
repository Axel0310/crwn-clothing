import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <div className="category-preview-container">
            <h2>
                <span onClick={navigateToCategory} className="title">{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products.slice(0, 4).map((product) => 
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </div>
        </div>
    )
}

export default CategoryPreview;