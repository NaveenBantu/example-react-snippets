# Fetch API

## What is the Fetch API?

The *Fetch API* allows us to perform *HTTP* requests to Web servers.
Nowadays Web servers often publish their services as *Restful WebServices*.
With the *Fetch API* we can access these services.

The *Fetch API* mainly consists of one function, the `fetch(...)` function.
It performs a *HTTP* request and returns a `Promise` object, which allows
us to process the response, when it returns. The `Promise` tells us that
the *Fetch API* works asynchronously by nature.

If we use the `async` keyword of *JavaScript*, then we can write
an asynchronous *HTTP GET* request like

```
async getAllAddresses() {

    const response  = await fetch('http://localhost:3100/addresses');
    const addresses = await response.json();
    return addresses;

}
```

By default `fetch(...)` send a *GET* request. The only required information
is the service *URL*.

> **Note:** `async` let's us use `await` to wait for the result of a `Promise`.
> So this code waits for the response returned by the `fetch(...)` function.
> Calling `json()` on the response also returns a `Promise`, so we use `await`
> again to convert the *JSON* content of the response into a *JavaScript*
> object.

If you want to configure the request or if you want to send a request other
than a *GET* request, then you need to provide a configuration object apart
from the *URL*.

A request, which creates a new address might look like this

```
async newAddress(address) {

    const config   = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(address)
    };
    const response  = await fetch('http://localhost:3100/addresses', config);
    const addressId = await response.text();
    return parseInt(addressId);

}
```

# What to Do?

Open the *Node* server project and run the server with the simple `Todo`
WebService. You can use

```
npm start
```

to start the server.

When started, the server will display something like

```
The server is running on port 3100!
The following actions are supported

  [GET]    http://localhost:3100/todos .......... returns all Todos
  [POST]   http://localhost:3100/todos .......... creates a new Todo
  [GET]    http://localhost:3100/todos/<id> ..... returns Todo with specified ID
  [PUT]    http://localhost:3100/todos .......... updates values of an existing Todo
  [DELETE] http://localhost:3100/todos/<id> ..... deletes Todo with the specified ID

Stop the server by pressing Ctrl+C.
```

As you can see, you can get all available `Todo`s and you can perform the usual
*CRUD* operations.

You can easily test the service by entering

```
http://localhost:3100/todos
```

in the address bar of your browser. You should see the *JSON* representation of
the available `Todo`s.

Open [TodoService](../src/services/TodoService.js) and implement all service
methods by using the *Fetch API*.

> **Hint:** For the conversion of a string to a number, use `parseInt(...)`.

> **Hint:** To create a string representation of your data,
> use `JSON.stringify(todo)`.
