# Component State

## Stateful Components

With properties, we can pass data from a parent component to a child component.
The internal state of a component has to be stored in a variable called
`state`. Since there are only local variables in functions, the following only
applies to class components.

> **Note:** Later you will learn about *hooks* in *React*. They allow you
> to store state in function components.

So for the moment let's stick to class components.

### Initialization

You can store any kind of object as `state`. The `state` is initialized
in the constructor

```
class NewsTicker extends React.Component {

    constructor(props) {

        super(props);

        this.newsServer = ...;

        this.state = { news: [] };

    }

    render() {

        const items =
            this.state.news.map(
                item => <NewsItem news={item}/>
            );

        return
            <div>
                {items}
            </div>;

    }

}
```

We can read the current state by accessing the `state` attribute.

> **Note:** You should only access the `state` in *read*-mode, never in
> *write*-mode!

### Life-cycle

We can hook into the life-cycle of a component with the methods

- `componentDidMount()` and
- `componentWillUnmount()`

In `componentDidMount()` we can do some initialization work and in
`componentWillUnmount()` we can do some deinitialization work.

```
class NewsTicker extends React.Component {
    ...
    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({ news: this.newsServer.getNews() }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    ...
}
```

When we want to change the state, we need to use the method `setState(...)`.
We pass an object with the new values.

## What to Do?

Open the file [Clock.js](../src/components/Clock.js). Implement a component,
which animates a clock, i.e. it updates the current time every second.

Open the file [TodoList.js](../src/components/TodoList.js). Load the available
todos with the `TodoService`. Store them in the state and display them in
the list.
