# Function Components

## What is a Function Component?

In *React* a UI component can be implemented as a function. The function
returns a *JSX* expression, which contains the code that renders the component
UI.

The general structure of a function component looks like this

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

The function returns the *HTML* to be rendered. `props` are the parameters
or properties passed as input to the component. A component can be embedded
into another component by adding a pseudo-*HTML* element to the *HTML* UI of
the parent component.

```
function AddressBook(props) {
    const homeAddress = new Address(...);
    const workAddress = new Address(...);
    return (
        <>
            <div>
                Home:<br/>
                <AddressDetails address="homeAddress"/>
            </div>
            <div>
                Work:<br/>
                <AddressDetails address="workAddress"/>
            </div>
        </>
    );
}
```

Suppose the addresses of the address book are stored in an array, then
the code of the address book component could look like this

```
function AddressBook(props) {
    const addresses = props.addresses; // <- Address array passed as input
                                       //    property to the component.

    const items = addresses.map(item => <div><AddressDetails address={item}/></div>);

    return (
        <>
            {items}
        </>
    );
}
```

## What to Do?

Open the file [TodoListItem.js](../src/components/TodoListItem.js).
Write a function component `TodoListItem`, which displays the caption of
a [Todo](../src/model/Todo.js). Additionally the ID of the `Todo` should
be stored in a hidden field.

What data would you pass as properties to the component?

Now open [TodoList.js](../src/components/TodoList.js). An array with `Todo`s
should be passed to that component. Display each `Todo` in
a `TodoListItem` component.

Finally open [App.js](../src/App.js). Display the 'TodoList' on the application
page.
