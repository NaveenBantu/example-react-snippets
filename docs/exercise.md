# Event Handling

## Intercepting Events

*HTML* events emitted by components can be handled by methods of
the component

```
class MyComponent extends React.Component {

    handleClick = (event) => {
        alert(event);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                Click Me
            </div>
        );

    }

}
```

## What to Do?

Open the file [TodoListItem](../src/components/TodoListItem.js). If a todo
item is clicked, then it should change its color. Introduce a boolean value,
which you toggle each time the item is clicked.

> **Hint:** Use a state value.

When the *Delete* button is clicked, then display an alert with a message
that the item was deleted.
