import { useMemo, useState } from "react";
import todos from "/data.json";

function App() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("all");
  const [allTodos] = useState(todos.todo);

  const filterTodos = (items, filter) => {
    console.log("filter todo called");
    if (filter === "done") return items.filter((item) => item.done);
    if (filter === "pending") return items.filter((item) => !item.done);
    return items;
  };

  const todosToshow = useMemo(
    () => filterTodos(allTodos, filter),
    [allTodos, filter]
  );

  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>done</button>
        <button onClick={() => setFilter("pending")}>pending</button>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>
      <div>
        <ul>
          {todosToshow?.map((item) => (
            <li
              key={item.task}
              style={{ textDecoration: item.done ? "line-through" : "" }}
            >
              {item.task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
