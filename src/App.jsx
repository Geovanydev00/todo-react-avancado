import "./styles/global.css";

import { TodoProvider } from "./context/TodoContext";

import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";

export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Minha Todo List</h1>

        <TodoForm />

        <TodoFilters />

        <TodoList />
      </div>
    </TodoProvider>
  );
}