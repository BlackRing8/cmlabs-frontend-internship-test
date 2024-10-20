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
    <div className=" bg-yellow-300 pt-24">
      <h1 className="text-center font-bold text-3xl lg:text-5xl lg:mt-14">Meals for {category}</h1>
      {error && <p>Error: {error}</p>}

      {/* Tampilkan loading state */}
      {loading && (
        <div className="flex w-full h-[100vh] justify-center items-center">
          <p className="text-5xl font-semibold">Loading...</p>
        </div>
      )}
      <div className="w-full justify-center h-auto lg:h-auto grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 lg:flex lg:flex-wrap  gap-y-8 px-2 gap-x-2 lg:gap-x-8 lg:px-14 lg:py-20 pt-8">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div
              key={meal.idMeal}
              style={{ backgroundImage: `url(${meal.strMealThumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
              className="h-[180px] w-[180px] lg:w-[200px] border-2 rounded-xl bg-yellow-100 overflow-hidden hover:scale-125 transition-transform flex justify-center items-end"
            >
              <span className="text-center px-4  bg-black text-white rounded-full mb-2 ">{meal.strMeal}</span>
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
