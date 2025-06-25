import { useState, useEffect, createContext } from "react";

// 1. Create a new context
export const TodoContext = createContext([]);



function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, text]);
    }

    return (
        <TodoContext.Provider value={{todos, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;