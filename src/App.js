import React from "react";
import "./styles.css";

import Counter from "./Counter";
import TodoList from "./TodoList";
import TicTacToe from "./TicTacToe";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
      <TicTacToe />
    </div>
  );
}
