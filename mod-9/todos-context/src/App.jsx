import { useState } from "react";
import "./App.css";
import TodoContext from "./context/TodoContext";

function App() {

  return (
    <TodoContext>
      <h1>Todos Apps</h1>
    </TodoContext>
  );
}

export default App;
