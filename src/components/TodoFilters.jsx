import { useTodos } from "../context/TodoContext";

export function TodoFilters() {
  const { filter, setFilter } =
    useTodos();

  return (
    <div className="filters">
      <button
        onClick={() =>
          setFilter("all")
        }
      >
        Todas
      </button>

      <button
        onClick={() =>
          setFilter("completed")
        }
      >
        Concluídas
      </button>

      <button
        onClick={() =>
          setFilter("pending")
        }
      >
        Pendentes
      </button>
    </div>
  );
}