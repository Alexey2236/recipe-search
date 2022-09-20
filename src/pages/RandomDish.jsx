import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getrandomDish } from "../api";
import { Spiner } from "../components/Spiner";

export function RandomDish() {
  const { goBack } = useHistory();
  const [recipe, setRecipe] = useState({});

  function showRandomDish() {
    getrandomDish()
      .then((data) => setRecipe(data.meals[0]));
    
  }
  useEffect(() => {
    showRandomDish();
  }, []);

  return (
    <>
      <div className="btn-wrapper">
        <button className="btn" onClick={goBack}>
          Go Back
        </button>

        <button className="btn" onClick={() => showRandomDish()}>
          Refresh
        </button>
      </div>
      {!recipe.idMeal ? (
        <Spiner />
      ) : (
        <div className="recepi">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h4> Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5> Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered table-ingredient">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((el) => {
                if (el.includes("Ingredient") && recipe[el]) {
                  return (
                    <tr key={el}>
                      <td>{recipe[el]}</td>
                      <td>{recipe[`strMeasure${el.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h2>Video Recipe</h2>
              <iframe
                id={recipe.idMeal}
                title={recipe.idMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
