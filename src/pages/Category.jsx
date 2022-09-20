import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilteredCategory } from "../api";
import { Spiner } from "../components/Spiner";
import { MealList } from "../components/MealList";

export function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
      setFilteredMeals(data.meals);
    });
  }, [name]);

  const handleSearch = (str) => {
    setFilteredMeals(
      meals.filter((item) => item.strMeal.toLowerCase().includes(str.toLowerCase()))
    );
  };

  return <>{!meals.length ? <Spiner /> : <MealList meals={filteredMeals} cb={handleSearch}/>}</>;
}
