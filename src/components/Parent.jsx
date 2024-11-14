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

  // function handleResize(data) {
  //   console.log("Window resized", data);
  // }

  //   // Throttling function
  //   function throttle(func, delay) {
  //     let lastCall = 0;
  //     return function (...args) {
  //       const now = new Date().getTime();
  //       if (now - lastCall < delay) {
  //         return;
  //       }
  //       lastCall = now;
  //       func(...args);
  //     };
  //   }

  //   // Throttled event handler
  //   const throttledHandleResize = throttle(handleResize, 2000);

  //   window.addEventListener("resize", throttledHandleResize);

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
