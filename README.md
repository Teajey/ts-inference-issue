Refer to [./src/index.tsx]()

Why does the component not infer type the same way that the hook does?

```jsx
function App() {
  useThing({ something: 1, callback: (s) => s + "1" });

  return (
    <ThingComponent something={1} callback={(s) => s + "1"}>
      {(r) => <div>{r}</div>}
    </ThingComponent>
  );
}
```

When I mouseover `callback` on the hook call I see the correct type inference:

```
(property) callback: (a: number) => string
```

However mousing over the same argument on ThingComponent, the return type is not inferred:

```
(JSX attribute) callback: (a: number) => any
```

It would be really useful if I could get the component to make the same inference...
