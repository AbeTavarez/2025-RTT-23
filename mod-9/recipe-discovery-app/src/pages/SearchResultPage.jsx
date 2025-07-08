import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

// https://reactrouter.com/start/declarative/url-values?plugin_version=chrome_4.0.8

function SearchResultPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);

  const searchTerm = searchParams.get("query");
  console.log(searchTerm);
  

  const {data, loading, error} = useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading...</h2>;

  const recipes = data?.meals;
  console.log(recipes);
  

  return (
    <main className="mx-10">
      <h1 className="text-2xl font-bold text-center my-5">Search Result Page</h1>

      <div>
        {recipes &&
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <h2 className="text-2xl font-bold mb-5">{recipe.strMeal} </h2>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="my-5"
              />
            </Link>
          ))}
      </div>
    </main>
  );
}

export default SearchResultPage;
