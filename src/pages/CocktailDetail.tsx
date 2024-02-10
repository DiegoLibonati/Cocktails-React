import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Error } from "../pages/Error";
import { Loading } from "../components/Loading";
import { IngredientItem } from "../components/IngredientItem";
import "../styles/CocktailDetail.css";

export const CocktailDetail = (): JSX.Element => {
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
  }

  if (!loading && items.length === 0) return <Error></Error>;

  return (
    <main className="main_container">
      <section className="cocktail_detail_container">
        <img src={items[0].strDrinkThumb} alt={items[0].strDrink}></img>

        <article className="cocktail_detail_container_information">
          <h2>
            <span>Name:</span> {items[0].strDrink}
          </h2>
          <p>
            <span>Glass:</span> {items[0].strGlass}
          </p>
          <p>
            <span>Information:</span> {items[0].strAlcoholic}
          </p>
          <ul className="cocktail_detail_container_information_list">
            <p>
              <span>Ingredients:</span>{" "}
            </p>
            {[
              items[0].strIngredient1,
              items[0].strIngredient2,
              items[0].strIngredient3,
              items[0].strIngredient4,
              items[0].strIngredient5,
            ].map((ing, index) => (
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
};
