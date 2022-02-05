import React from "react";
import ReactDOM from "react-dom";

type ThingProps<T, U> = {
  something: T;
  callback: (a: T) => U;
  callback2?: (r: U) => U;
};

function thing<T, U>({ something, callback, callback2 }: ThingProps<T, U>) {
  const result = callback(something);
  return callback2?.(result);
}

function App() {
  thing({
    something: 1,
    callback: (s) => s + "1",
    callback2: (r) => r,
  });

  return null;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
