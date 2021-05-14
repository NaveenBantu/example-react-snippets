# Publisher - Subscriber

## Publish-Subscribe-Mechanism

An alternative to lifting up state is using a *publisher-subscriber* mechanism.
It is a notification mechanism, which allows us to send messages, which can be
consumed at some other place.

Usually, when something happens, then one component publishes an event or
message and other components, which have subscribed to be informed about
those messages/events will be notified about the emitted event.

We will use the framework *pubsub-js*, which can be installed by

```
npm install pubsub-js --save
```

Since our *package.json* file already contains the *pubsub-js* entry, it is
enough to call

```
npm install
```

on the project.

Messages can be published with

```
PubSub.publish('my-identfier', myData);
```

and consumed by

```
PubSub.subscribe('my-identfier', (msg, data) => { ...});
```

A function is passed to the `subscribe(...)` method. It contains the code
to be performed, when a published method arrives.

## What to Do?

Open the component [TodoDetails](../src/components/TodoDetails.js). Publish
the changed value with the message ID `on-edit`.

Also publish the submission of the form. Use `on-store` as ID. No data is
needed.

Open the component [TodoListItem](../src/components/TodoListItem.js).
When an item has been selected, publish its ID. Use the message ID
`on-select`.

When *Delete* button has been clicked, then publish the ID of the `Todo` to
be deleted. Use the message ID `on-delete`.

Go to the component [TodoEditor](../src/components/TodoEditor.js). Subscribe
to the messages with the IDs

- `on-edit`
- `on-store`
- `on-select`
- `on-delete`

Perform the correct operations, when a message is received by the subscriber.
