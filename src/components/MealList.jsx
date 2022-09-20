import { Meal } from "./Meal";
import { useHistory } from "react-router-dom";
import { Search } from "./Search";

export function MealList(props) {
  const { meals, cb } = props
  const { goBack } = useHistory();
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      <Search cb={cb}/>
      <div className="catalog">
        {meals.map((el) => (
          <Meal key={el.idMeal} {...el} />
        ))}
      </div>
    </>
  );
}
