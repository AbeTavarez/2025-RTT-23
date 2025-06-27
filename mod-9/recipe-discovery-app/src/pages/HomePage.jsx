import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function HomePage() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  if (error) return <h2>{error}</h2>;
  if (loading) return <h2>Loading...</h2>;

  const categories = data?.categories;
  console.dir(categories);

  return (
    <main className="mx-10">
      <h1 className="text-center text-4xl font-bold my-10">Categories</h1>

      {categories &&
        categories.map((category) => (
          <Link
            className="flex flex-col items-center mb-20"
            to={`/category/${category.strCategory}`}
            key={category.idCategory}
          >
            <h2 className="text-2xl font-bold mb-5">
              {category.strCategory}
            </h2>
            <img src={category.strCategoryThumb} alt={category.strCategory} className="my-5"/>
            <p className="text-xl">{category.strCategoryDescription}</p>
          </Link>
        ))}
    </main>
  );
}

export default HomePage;
