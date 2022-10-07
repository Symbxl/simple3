import React from "react";
import "./styles.css";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);

  const ButtonIncrement = React.useCallback(
    ({ setCounter }) => {
      return (
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increment
        </button>
      );
    },
    [counter]
  );

  return (
    <div className="App">
      <ButtonIncrement setCounter={setCounter} />
      <p>{counter}</p>
    </div>
  );
}
