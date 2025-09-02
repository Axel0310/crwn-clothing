import { useState, useEffect } from "react";

// TODO: create a caching mechanism
const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((response) => response.json())
      .then(({ categories }) => setCategories(categories))
      .catch((error) => console.log("Issue when fetching categories: ", error));
  }, []);

  return categories;
};

export default useCategories;
