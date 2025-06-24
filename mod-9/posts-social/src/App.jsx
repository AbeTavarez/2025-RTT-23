import { createContext, useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import NavBar from "./components/NavBar";
import UserProvider from "./context/UserContext";
import "./App.css";

// 1. Create a new context object
export const ThemeContext = createContext("light");

function App() {
  // 2. Setting up state and logic
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // 3. Provide values to the context provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </ThemeContext.Provider>
  );
}

export default App;
