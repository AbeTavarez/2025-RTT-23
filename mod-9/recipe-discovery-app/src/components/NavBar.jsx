import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/?query=${searchTerm}`);
    setSearchTerm("");
  }

  return (
    <nav className="flex flex-col items-center">
      <ul className="flex space-x-4 my-5">
        <li className="text-xl">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="text-xl">
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Favorites
          </NavLink>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="outline p-1 rounded m-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" className="outline p-1 rounded m-2 hover:cursor-pointer hover:bg-blue-500" value="Search" />
      </form>
    </nav>
  );
}

export default NavBar;
