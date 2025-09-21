import { useState, createContext, useEffect } from "react";

export const ProductsContext = createContext({
    products: [],
    setProducts: null
});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const value = {products, setProducts};

    useEffect(() => {
      try {
        fetch("data/shop-data.json")
        .then((response) => response.json())
        .then(({products}) => setProducts(products))
      } catch(error) {
        console.log("Error trying to retrieve products: ", error.message);
      } 
    }, []);

    return (
        <ProductsContext value={value}>{children}</ProductsContext>
    )
}