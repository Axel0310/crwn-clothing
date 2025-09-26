import { use } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = use(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview key={title} products={categoriesMap[title]} title={title} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
