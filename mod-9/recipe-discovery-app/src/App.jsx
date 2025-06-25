import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <>
      <NavBar />
      <h1>Recipe App</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
