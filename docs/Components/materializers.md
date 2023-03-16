---
sidebar_position: 2
---

# Materializers

Materializers are hooks over the lifecycle of an actor. They are used to add implicit infrastructure logic to an actor. Some
use case of materializers are, actually, two main tarant modules [tarant-vue](https://github.com/tarantx/tarant-vue) and
[tarant-local-storage](https://github.com/tarantx/tarant-local-storage) that let us render actors and save their state
in the local storage of the browser, for later recovery.

A materializer can implement the following methods:

* `onInitialize(actor: Actor)` when the actor is first created.
* `onBeforeMessage(actor: Actor, message: ActorMessage): void` when the actor is going to process a message.
* `onAfterMessage(actor: Actor, message: ActorMessage): void` after a message has been processed succesfully.
* `onError(actor: Actor, message: ActorMessage, error: any): void` when processing a message failed. You can not
recover from the error from here, for that, you need to use [supervisors](/docs/Components/supervisors).