import React, { useState } from "react";
import MealList from "./MealList";

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=f52f2769b2554544b264b4d1c98d0d96&timeFrame=day&targetCalories=${calories}`    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calorias aprox (ej: 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Obtener recetas</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;