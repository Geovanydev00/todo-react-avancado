import React from "react";

function TodoItemComponent({
  todo,
  toggleTodo,
  removeTodo,
}) {
  console.log(
    "Renderizou:",
    todo.text
  );

  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            toggleTodo(todo.id)
          }
        />

        <span
          className={
            todo.completed
              ? "completed"
              : ""
          }
        >
          {todo.text}
        </span>
      </div>

      <button
        className="delete-btn"
        onClick={() =>
          removeTodo(todo.id)
        }
      >
        Remover
      </button>
    </li>
  );
}

export const TodoItem = React.memo(
  TodoItemComponent
);