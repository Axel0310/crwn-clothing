import "./shop.styles.scss";
import { use, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categoriesMap } = use(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default Shop;
