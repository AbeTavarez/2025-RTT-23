import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

// 1. Create a new context
export const UserContext = createContext(null);

function UserProvider({ children }) {
  // 2. Create state and logic
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://dummyjson.com/users/1");
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  // login
  const login = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users/1");
      const data = await res.json();
      setUser(data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  // logout
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
