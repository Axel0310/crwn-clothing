import { useState, useEffect } from "react";

// Could extract the sessionStorage logic
const useFetchData = (url, property) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const propertyInSessionStorage = sessionStorage.getItem(property);
    if(!propertyInSessionStorage){
      fetch(url)
      .then((response) => response.json())
      .then(({[property]: data}) => {
        sessionStorage.setItem(property, JSON.stringify(data))
        setData(data)
      })
      .catch((error) => console.log("Issue when fetching data: ", error));
    } else {
      setData(JSON.parse(propertyInSessionStorage))
    }
  }, [url, property]);

  return data;
};

export default useFetchData;
