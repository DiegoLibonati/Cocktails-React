import React from "react";
import { Link } from "react-router-dom";
import "../styles/CocktailItem.css";

export const CocktailItem = ({ id, name, info, image, glass }) => {
  return (
    <article className="cocktail_container">
      <img src={image} alt={name}></img>
      <div className="cocktail_container_information">
        <h2>{name}</h2>
        <p>{glass}</p>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}>Details</Link>
      </div>
    </article>
  );
};
