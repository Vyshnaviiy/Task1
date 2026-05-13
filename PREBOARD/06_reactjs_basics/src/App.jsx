import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    };

    fetchTodos();
  }, []);

  return (
    <main className="container">
      <h1>ReactJS Basics</h1>
      <p>This component fetches todos from the local FastAPI backend.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Done" : "Pending"}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
