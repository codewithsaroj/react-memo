import React from "react";

const Child = ({ todos, addTodo }) => {
  console.log("child renders");
  return (
    <>
      {todos.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        );
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default React.memo(Child);
