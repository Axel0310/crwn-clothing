import "./shop.styles.scss";
import { use } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = use(ProductsContext);

  return (
    <div className="products-container">
      {products &&
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </div>
  );
};

export default Shop;
