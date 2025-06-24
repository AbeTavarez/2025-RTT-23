import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";

function NavBar() {
    // 4. Consume the context
    const {theme, toggleTheme} = useContext(ThemeContext)

    console.log(theme, toggleTheme);
    
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
      </ul>
    </nav>
  );
}

export default NavBar;
