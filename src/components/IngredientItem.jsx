import React from "react";

export const IngredientItem = ({ ingredient }) => {
  if (ingredient) {
    return <li>{ingredient},</li>;
  }
};
