import { useState } from "react";

import { useTodos } from "../context/TodoContext";

export function TodoForm() {
  const [text, setText] = useState("");

  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button>
        Adicionar
      </button>
    </form>
  );
}