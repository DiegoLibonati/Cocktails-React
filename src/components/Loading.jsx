import React from "react";
import "../styles/Loading.css";

export const Loading = () => {
  return (
    <section className="cocktail_container_load">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
