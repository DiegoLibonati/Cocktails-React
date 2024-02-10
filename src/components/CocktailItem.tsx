import { Link } from "react-router-dom";
import { CockTailItemProps } from "../entities/entities";
import "../styles/CocktailItem.css";

export const CocktailItem = ({ cocktail }: CockTailItemProps): JSX.Element => {
  return (
    <article className="cocktail_container">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
      <div className="cocktail_container_information">
        <h2>{cocktail.strDrink}</h2>
        <p>{cocktail.strGlass}</p>
        <p>{cocktail.strAlcoholic}</p>
        <Link to={`/cocktail/${cocktail.idDrink}`}>Details</Link>
      </div>
    </article>
  );
};
