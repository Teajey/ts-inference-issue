import React from "react";
import ReactDOM from "react-dom";

type ThingProps<T, U> = {
  something: T;
  callback: (a: T) => U;
};

function useThing<T = any, U = any>({ something, callback }: ThingProps<T, U>) {
  return callback(something);
}

function ThingComponent<T = any, U = any>({
  something,
  callback,
  children,
}: ThingProps<T, U> & {
  children: (r: U) => JSX.Element;
}) {
  const result = useThing({ something, callback });
  return <div>{children(result)}</div>;
}

function App() {
  useThing({ something: 1, callback: (s) => s + "1" });

  return (
    <ThingComponent something={1} callback={(s) => s + "1"}>
      {(r) => <div>{r}</div>}
    </ThingComponent>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
