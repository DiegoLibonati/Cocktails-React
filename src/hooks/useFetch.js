import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getApiInformation = async () => {
    setLoading(true);
    const request = await fetch(url);
    const data = await request.json();

    const { drinks } = data;

    if (drinks) {
      const newCocktails = drinks.map((item) => {
        const {
          idDrink,
          strDrink,
          strDrinkThumb,
          strAlcoholic,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = item;

        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
      });

      setItems(newCocktails);
    } else {
      setItems([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    getApiInformation();
  }, [url]);

  return {
    loading,
    items,
  };
};
