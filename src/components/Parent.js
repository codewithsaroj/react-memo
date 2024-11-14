import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent renders");
  const [todos, setTodos] = useState(["task 1", "task 2"]);
  const [count, setCount] = useState(0);

  const expensiveCalFn = (count) => {
    for (let i = 0; i < 1000000000; i++) {}
    return count + 1;
  };

  const expensiveCalculation = useMemo(() => expensiveCalFn(count), [count]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todo) => [...todo, "new todo"]);
  }, [todos]);
  return (
    <div>
      <p>Expensive Calculation : {expensiveCalculation}</p>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment Count</button>
      <hr />
      <Child todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default Parent;
