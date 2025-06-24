import { useState, useEffect, createContext } from "react";

// 1. Create a new context
const UserContext = createContext(null);

function UserProvider({ children }) {
  // 2. Create state and logic
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("https://dummyjson.com/users/1");
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  // login
  const login = () => {};

  // logout
  const logout = () => {
    setUser(null)
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
        {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
