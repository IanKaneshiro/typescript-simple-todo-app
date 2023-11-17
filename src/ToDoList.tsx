import { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList = () => {
  const [todos, setToDos] = useState<Item[]>([
    { id: 1, text: "Learn TS", completed: false },
    {
      id: 2,
      text: "Build todo app",
      completed: false,
    },
  ]);
  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number): void => {
    setToDos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    if (!input) return;
    const newTodo: Item = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setToDos([...todos, newTodo]);
    setInput("");
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((el) => (
          <li
            key={el.id}
            onClick={() => handleToggle(el.id)}
            style={{
              textDecoration: el.completed ? "line-through" : "none",
            }}
          >
            {el.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add todo item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleClick()}>Add</button>
    </div>
  );
};

export default ToDoList;
