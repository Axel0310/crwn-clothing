// File not used anymore but kept as example

import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../helpers/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoriesMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoriesMap);
      }
      getCategoriesMap();
    }, [])

    return (
        <CategoriesContext value={value}>{children}</CategoriesContext>
    )
}