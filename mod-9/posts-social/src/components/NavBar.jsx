import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function NavBar() {
  // 4. Consume the context
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, login } = useContext(UserContext);

  return (
    <nav>
      <h3>Current mode: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {/* <input type="checkbox" onChange={toggleTheme}/> */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {user ? (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        ) : <button onClick={login}>Login</button>}
      </ul>
    </nav>
  );
}

export default NavBar;
