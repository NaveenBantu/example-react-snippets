# JSX

## What is JSX?

*JSX* allows us to use *HTML* expressions directly in our *JavaScript*
code. *HTML* expressions can be assigned directly to *JavaScript* constants or
variables.

```
const caption = <h1>Todos</h1>;
```

In *JSX* expressions we can access *JavaScript* by the `{}` operator.

```
const page = <div>{caption}</div>
```

## What to Do?

Open the file [index.js](../src/index.js). Create one or more JSX expressions
for an HTML page containing a todo list with the following items

- *Prepare Dinner*
- *Learn React*
- *Buy socks*

Render the page by using

```
ReactDOM.render(...)
```
