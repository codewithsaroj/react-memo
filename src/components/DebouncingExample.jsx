/*
Note :
Debouncing, on the other hand, is also used to limit the number of times a function or an event
handler is invoked. It ensures that the function is called only after a certain period of inactivity.
Debouncing allows you to postphone the function call until the user has finished typing or a specific
time has elapsed since the last event.
*/

import React, { useState, useEffect } from "react";

const DebouncingExample = () => {
  const [searchKey, setSeachKey] = useState("");

  const searchApiCall = (searchKey) => {
    console.log("searchApiCall", searchKey);
  };
  const debounce = (cb, delay) => {
    let timeOutId;
    return (...args) => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };
  const delaySearchKey = debounce(searchApiCall, 600);
  useEffect(() => {
    delaySearchKey(searchKey);
  }, [searchKey]);

  const handleChange = (e) => {
    setSeachKey(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name={searchKey}
        placeholder="search"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default DebouncingExample;
