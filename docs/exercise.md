# Conditional Rendering

## What is Conditional Rendering?

If a component is only rendered, when a certain condition holds, then this
is called *conditional rendering*. We can use the `{}` operation in
a *JSX* expression to write some *JavaScript* code, which contains a condition.

The *JSX* code for a conditionally rendered component might look like this

```
<div>
    {
        showDetails &&
        <AddressDetails address={this.props.address}/>
    }
</div>
```

So if `showDetails` is `true`, then the address details will be rendered,
otherwise not.

## What to Do?

We want to be able to add new `Todo`s. We will not be able to add a new
`Todo` at the moment, but we can prepare a component, which can be fed with
the data that should be filled into the new `Todo`.

Open the file [TodoEditor.js](../src/components/TodoEditor.js). The editor
should be able to store a `Todo` in its state. When the *Add* button was
clicked, then the state variable should be filled with a new, empty
`Todo`.

The [TodoEditor](../src/components/TodoEditor.js) should render
the [TodoDetails](../src/components/TodoDetails.js), if the state variable
contains a `Todo` object.

Complete the [TodoDetails](../src/components/TodoDetails.js). The form should
contain

- the caption and
- the description

of a `Todo`. Add also a *Submit* button to the form, even if it is useless
at the moment.
