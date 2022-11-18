import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=f52f2769b2554544b264b4d1c98d0d96&includeNutrition=false`
    )
      .then((response) => response.json())

      .then((data) => {
        setImageUrl(data.image);
      })

      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>

      <img src={imageUrl} alt="recipe" />

      <ul className="instructions">
        <li>Tiempo de preparación: {meal.readyInMinutes} mins</li>

        <li>Cantidades: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Ir a receta</a>
    </article>
  );
}
