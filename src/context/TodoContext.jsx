import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TodoContext = createContext();

export function TodoProvider({
  children,
}) {
  const [todos, setTodos] = useState(() => {
    const storedTodos =
      localStorage.getItem("todos");

    return storedTodos
      ? JSON.parse(storedTodos)
      : [];
  });

  const [filter, setFilter] =
    useState("all");

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [
      newTodo,
      ...prevTodos,
    ]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "completed":
        return todos.filter(
          (todo) => todo.completed
        );

      case "pending":
        return todos.filter(
          (todo) => !todo.completed
        );

      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}