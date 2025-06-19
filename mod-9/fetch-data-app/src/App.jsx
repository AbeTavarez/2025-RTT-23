import { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./components/RecipesList";
import TimerDisplay from "./components/TimerDisplay";
import AdvanceCounter from "./components/AdvanceCounter";

function App() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // fetch recipes
  // useEffect(() => {}, []);

  // Runs on every render
  useEffect(() => {
    console.log("Always renders");
  });

  // Runs once (at the initial render)
  // useEffect(() => {
  //   fetch('https://dummyjson.com/recipes')
  //   .then(res => res.json())
  //   .then(data => setRecipes(data.recipes))
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRecipes = async () => {
      // handle loading and error
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://dummyjson.com/recipes", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Error fetching recipes data");
        }

        const data = await res.json();
        console.log(data);
        setRecipes(data.recipes);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();

    return () => {
      console.log("Cleanup function");
      controller.abort();
    };
  }, []);

  return (
    <>
      <TimerDisplay />
      <hr />
      
      <AdvanceCounter />
      
      <hr />

      <h1>Recipes App</h1>

      {loading && <h1>loading recipes...</h1>}

      {error && <div>{error}</div>}

      {recipes && <RecipeList recipes={recipes} />}
    </>
  );
}

export default App;
