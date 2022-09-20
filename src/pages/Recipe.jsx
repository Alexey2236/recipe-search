import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealById } from "../api";
import { Spiner } from "../components/Spiner";

export function Recipe() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Spiner />
      ) : (
        <div className="recepi">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h4> Category: {recipe.strCategory}</h4>
          {recipe.strArea ? <h5> Area: {recipe.strArea}</h5> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
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
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
