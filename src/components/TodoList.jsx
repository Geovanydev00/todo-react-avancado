import { useTodos } from "../context/TodoContext";

import { TodoItem } from "./TodoItem";

export function TodoList() {
  const {
    todos,
    toggleTodo,
    removeTodo,
  } = useTodos();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}