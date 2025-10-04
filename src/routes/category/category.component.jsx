import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);

  return (
    <div className="category-container">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="products">
        {categoriesMap[category] && categoriesMap[category].map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
