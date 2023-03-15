---
sidebar_position: 2
---

# Create An Actor

Actors represent the main unit of logic in the Actor Model. They are transactional, asynchronous and safe. When you work
with actors, you have the following guarantees:

* **A single actor will process a single message at a time**. For example, if you call a method in an actor two times, you
will not process those calls in parallel, but sequentially.
* **A single actor will process messages in order**. For example, if you call two different methods in an actor, messages
will be processed in the calling order.
* **Actor failures are isolated**. If an actor fails because there is a requirement that is not fulfilled (like not
having network connection), the exception will not propagate to all actors, but will be managed by the actor supervisor.
* **Slow actors will not block other actors**. If an actor is waiting for a response of a server, or from another actor, 
it will not block other actors, that will be still processing messages.

The process of creating an actor is quite transparent, and a simple task. Actor types are represented with a protocol 
they understand. A protocol is a set of messages that an actor can actually handle.

For example, if we have the following protocol:

```js
ping()
```

It means that the actor will only understand the message `ping` without parameters.

With the following protocol:

```js
sayHi(whom)
sayBye(whom)
```

It means that the actor can handle both messages, `sayHi` and `sayBye` with a single parameter.

To define an Actor protocol, we just need to create a ES6 class that extends Actor.

```js
const { Actor } = require('tarant')

class Person extends Actor {
  sayHi(whom) {
    console.log('Hi', whom)
  }

  sayBye(whom) {
    console.log('Bye', whom)
  }
}
```

This Actor type Person will handle two messages with the specified logic (just printing something into the console). To
instantiate an actor, [we need a running actor system](/tutorial/how-to-create-an-actor-system). We are going to create an
Actor System with the default configuration:

```js
const { ActorSystem } = require('tarant')

const system = ActorSystem.default()
```

And to instantiate an actor, we need to call the `actorOf` method with the Actor protocol that we want to use:

```js
const dante = system.actorOf(Person)
```

And you can call any method of the actor directly, like any other class:

```js
dante.sayHi('Martin')
```

## Actors with initial state

It's common that an actor needs some initial state to work, for example, in our case, we need the person name. Actors can
receive any initial state on the constructor, and this state can be passed through `actorOf`. For example, let's extend
our `Person` protocol to allow having a name.

```js
class Person extends Actor {
  constructor(name) {
    super()

    this.name = name
  }

  sayHi(whom) {
    console.log(this.name, ': Hi', whom)
  }

  sayBye(whom) {
    console.log(this.name, ': Bye', whom)
  }
}
```

When defining the constructor of an Actor, there are two things to consider:

* **You need to call the super() constructor**. This is a JavaScript rule and it won't work if we don't do it the first 
thing in your newly created constructor.
* **super() has a parameter `id` that is the ID of the actor**. Actors are uniquely identified by an ID that you can
pass through the super constructor (as in `super(theIdIWant)`). If we don't specify any ID, tarant will create a random
UUID for it.

Now that we have our new redefined protocol, we can create a new actor with a name.

```js
const dante = system.actorOf(Person, ['Dante'])
```

Now, calling the sayHi method like in the previous example, will show:

```
> Dante : Hi Martin
```

## How calling an Actor works

It's important to note that calling an actor method is not a synchronous operation. It's completely asynchronous and they
always return promises. When you call a method on an actor, the actor will add a new message to it's mailbox, and will be
processing messages in the mailbox until it's empty.

You can find more information of the architecture in [the architecture page](/architecture/). 