import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CategoryPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
  );

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading...</h2>;

  const recipes = data?.meals;
  console.dir(recipes);

  return (
    <main className="mx-10">
      <h1 className="text-center text-4xl font-bold my-10">CategoryPage</h1>

      <div>
        {recipes &&
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <h2 className="text-2xl font-bold mb-5">{recipe.strMeal}</h2>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="my-5 rounded-md"/>
            </Link>
          ))}
      </div>
    </main>
  );
}

export default CategoryPage;
