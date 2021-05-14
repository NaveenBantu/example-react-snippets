# Lifting up State

## State Management

A complex UI is divided into several components, which interact with each
other. Components always form a hierarchical structure, i.e. a component can
have child components and the child components can have further children etc.

A component can pass data to its children via properties. Passing data from
the child components to their parent components is not that easy. We have seen
that *state* can be used in a component to maintain some internal state inside
a component. Sometimes that state should be reflected by some other component
that is not a child of that component.

Let's say we select a `Todo` in our list, then its details should be displayed
in a `TodoDetails` component. The `TodoDetails` component is not a child
component of `TodoListItem` or `TodoList`. So we cannot pass the data from one
of those components to the `TodoDetails` component.

The parent component of all those components is the `TodoEditor` component.
What we can do, is, we can list the common state from all sub-components to
that parent component. By properties we can pass all data and functionality
from the top to the bottom, i.e. the child components. That is called
*Lifting up State*.

## What to Do?

We will try to lift the state up
the [TodoEditor](../src/components/TodoEditor.js). It will be the place for
all common data and the functionality that modifies that data.

Follow the *TODO*s in the components

- [TodoEditor](../src/components/TodoEditor.js)
- [TodoDetails](../src/components/TodoDetails.js)
- [TodoList](../src/components/TodoList.js)
- [TodoListItem](../src/components/TodoListItem.js)
