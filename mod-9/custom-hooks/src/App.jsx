import "./App.css";
// import { useEffect } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";
import useWindowSize from "./hooks/useWindowSize";
import useLocalStorage from "./hooks/useLocalStorage";
import useForm from "./hooks/useForm";

function App() {
  useDocumentTitle("Landing Page | ACME Company");

  const size = useWindowSize();
  console.log(size);

  const [storedValue, setStoredValue] = useLocalStorage("theme", "light");
  // const [storedValue, setStoredValue] = useLocalStorage("user", {});
  console.dir(storedValue);

  const toggleTheme = () => {
    setStoredValue(storedValue === "light" ? "dark" : "light");
  };

  const { values, error, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      {size.width > 600 ? <h1>Custom Hooks</h1> : <h2>Custom Hooks</h2>}
      <button onClick={toggleTheme}>
        Toggle {storedValue === "light" ? "dark" : "light"}
      </button>

      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <label>password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default App;
