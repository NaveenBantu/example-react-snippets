# Class Components

## What is a Class Component?

*React* allows us to write components in two ways, either as a function or
as a class. Which way we choose has no impact on the way the component is
displayed.

So a function component, such as

```
function AddressDetails(props) {
    return (
        <div>
            <input type="text" value={props.address.street}/>
            <input type="text" value={props.address.zipCode}/>
            <input type="text" value={props.address.city}/>
        </div>
    );
}
```

can also be written as

```
class AddressDetails extends React.Component {

    constructor(props) { super(props); }

    render() {
        return (
            <div>
                <input type="text" value={this.props.address.street}/>
                <input type="text" value={this.props.address.zipCode}/>
                <input type="text" value={this.props.address.city}/>
            </div>
        );
    }
}
```

The *JSX* expression returned by the function component is moved to
the `render()` method of the class component.

The properties are now an object variable of the component class. That's
why we need to access them by `this.props`.

If we don't do anything in the constructor, we need not write it. In case
we want to do something in the constructor, we need to pass the properties
as a parameter and we need to call `super(props)`.

## What to Do?

Open the file [TodoList](../src/components/TodoList.js) and rewrite
the function component as a class component.

Open the file [App](../src/App.js) and rewrite the function component
as a class component.
