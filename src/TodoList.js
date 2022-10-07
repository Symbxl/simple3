import React from "react";
import "./styles.css";

export default function TodoList() {
  const [todo, setTodo] = React.useState([]);
  const [todoValue, setTodoValue] = React.useState("");

  function changeTodoStatus(id) {
    // const newTodo = todo.map((item) => {
    //   return item.id === id ? { ...item, done: true } : item;
    // });

    const newTodo = todo.splice(id, 1);

    setTodo(newTodo);
  }
  function addTodo() {
    const newTodo = [
      ...todo,
      { id: todo.length + 1, activity: todoValue, done: false }
    ];
    setTodo(newTodo);
    setTodoValue("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button onClick={addTodo}>Add todo </button>
      <ul>
        {todo.map((todo, index) => (
          <li key={index} style={{ display: "flex", justifyContent: "center" }}>
            {todo.activity && !todo.done && (
              <p style={{ margin: 5 }}>{todo.activity}</p>
            )}
            {todo.activity && !todo.done && (
              <input
                type="checkbox"
                defaultChecked={todo.done}
                onChange={() => changeTodoStatus(todo.id)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
