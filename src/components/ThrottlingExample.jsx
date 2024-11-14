/*
Note :
Throttling in React is a technique used to limit the number of times a function or an event handler
is invoked. 
It ensures that the function is called at a specified interval, preventing it from being executed
too frequently.
Throttling allows you to control the rate at which the function is called by setting up a minimum 
time interval between each function invocation.
If the function is called multiple times within that interval, only the first invocation is executed,
and subsequent invocations are ignored until the interval elapses.
*/

import React from "react";

const ThrottlingExample = () => {
  //resize function
  const resizeFn = (data) => {
    console.log("resize fn", data);
  };

  const delayFun = (cb, delay) => {
    let lastUpdate = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - lastUpdate < delay) {
        return;
      }
      lastUpdate = now;
      cb(...args);
    };
  };

  const throttleHandler = delayFun(resizeFn, 1000);

  window.addEventListener("resize", throttleHandler);

  return <div>Throttling Example</div>;
};

export default ThrottlingExample;
