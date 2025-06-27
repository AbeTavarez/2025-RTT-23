import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function RecipeDetailPage() {
  const { recipeId } = useParams();

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
  );

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading...</h2>;

  const recipe = data?.meals[0];
  console.log(recipe);

  return (
    <main className="mx-10">
     

      <div>
        {data?.meals[0] &&
          data?.meals.map((recipe) => (
            <div key={recipe.idMeal}>
              <h2 className="text-2xl font-bold mb-5">{recipe.strMeal} </h2>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="my-5"
              />
              <p className="text-xl">{recipe.strInstructions}</p>

              <div className="font-bold text-xl my-5">Ingredients</div>
              <ul>
                {Object.entries(recipe).map(
                  ([key, value]) =>
                    key.substring(0, key.length - 1) === "strIngredient" && (
                      <li key={key}>- {value}</li>
                    ),
                )}
              </ul>
            </div>
          ))}
      </div>
    </main>
  );
}

export default RecipeDetailPage;
