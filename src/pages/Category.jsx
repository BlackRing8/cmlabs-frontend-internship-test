import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ambilDataCategories = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        const batasinData = response.data.categories.slice(0, 12);
        setCategories(batasinData);
      } catch (error) {
        setError("Gagal mengambil data kategori");
      } finally {
        setLoading(false);
      }
    };
    ambilDataCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/meals/${category}`); // Navigasi ke halaman /meals/:category
  };
  return (
    <div className="bg-yellow-300 w-full ">
      {error && <p>Error: {error}</p>}

      {/* Tampilkan loading state */}
      {loading && (
        <div className="flex w-full h-[100vh] justify-center items-center">
          <p className="text-5xl font-semibold">Loading...</p>
        </div>
      )}
      <div className="py-24 lg:pt-44 w-full">
        <h1 className="uppercase font-bold text-5xl text-black text-center">Category Meal</h1>
        {/* Tampilkan daftar kategori sebagai tombol */}
        <div className="w-full justify-center h-auto lg:h-auto grid-cols-2 sm:grid-cols-3 grid md:grid-cols-4 lg:flex lg:flex-wrap  gap-y-8 px-2 gap-x-2 lg:px-14 pt-8">
          {categories.map((category) => (
            <button
              key={category.strCategory}
              onClick={() => handleCategoryClick(category.strCategory)}
              className="lg:h-30 lg:w-56 border-2 rounded-xl bg-yellow-100 overflow-hidden hover:scale-125 transition-transform"
              // Kirim request ke API kedua
            >
              <img src={category.strCategoryThumb} alt={category.strCategories} style={{ width: "200px", height: "110px" }} className="hover:scale-125 transition-transform" />
              <span className="">{category.strCategory}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
