import { Link } from "react-router-dom";

export function Meal(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card" id={idMeal}>
      <div className="card-image">
        <img className="categoryImg" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          View recipe
        </Link>
      </div>
    </div>
  );
}
