import useFetchData from "../../hooks/useFetchData.jsx";
import CategoryItem from "../category-item/category-item.component.jsx";
import "./categories-list.styles.scss";

const CategoriesList = () => {
  const categories = useFetchData("data/categories.json", 'categories');

  return (
    <div className="categories-list-container">
      {categories.length > 0 &&
        categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
    </div>
  );
};

export default CategoriesList;
