import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-center my-5 text-5xl font-bold">Recipe App</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
    </>
  );
}

export default App;
