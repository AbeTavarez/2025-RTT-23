import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar() {
  // 4. Consume the context
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login } = useContext(UserContext);

  return (
    <nav className="p-5 flex justify-between items-center">
      <div>
        <h3 className="text-2xl font-bold">Current mode: {theme}</h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      {/* <input type="checkbox" onChange={toggleTheme}/> */}

      {/* LINKS    */}
      <ul className="flex space-x-5">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "underline" : "")}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
