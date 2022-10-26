import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Error } from "../pages/Error";
import { Loading } from "../components/Loading";
import { IngredientItem } from "../components/IngredientItem";
import "../styles/CocktailDetail.css";

export const CocktailDetail = () => {
  const { id } = useParams();
  const { loading, items } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (loading) {
    return (
      <main className="main_container">
        <Loading></Loading>;
      </main>
    );
  } else {
    if (items.length === 1) {
      const { name, image, info, glass, ingredients } = items[0];

      return (
        <main className="main_container">
          <section className="cocktail_detail_container">
            <img src={image} alt={name}></img>

            <article className="cocktail_detail_container_information">
              <h2>
                <span>Name:</span> {name}
              </h2>
              <p>
                <span>Glass:</span> {glass}
              </p>
              <p>
                <span>Information:</span> {info}
              </p>
              <ul className="cocktail_detail_container_information_list">
                <p>
                  <span>Ingredients:</span>{" "}
                </p>
                {ingredients.map((ing, index) => (
                  <IngredientItem
                    key={index * 54}
                    ingredient={ing}
                  ></IngredientItem>
                ))}
              </ul>
            </article>

            <Link className="GoHome" to="/">
              Go Home
            </Link>
          </section>
        </main>
      );
    } else {
      return <Error></Error>;
    }
  }
};
