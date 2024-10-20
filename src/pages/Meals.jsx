import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Meals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ambilDataMeals = async () => {
      try {
        setLoading(true);

        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setMeals(response.data.meals);
      } catch (error) {
        setError("gagal mengambil data meal");
      } finally {
        setLoading(false);
      }
    };

    ambilDataMeals();
  }, [category]);

  return (
    <div className="h-[100vh] w-full bg-yellow-300 pt-24">
      <h1>Meals for {category}</h1>
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
      <div className="flex-wrap flex">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal}>
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
              <p>{meal.idMeal}</p>
            </div>
          ))
        ) : (
          <p>No meals found for this category</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
