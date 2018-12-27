+++
title = "Getting Started"
date = 2018-12-27T00:00:00

[header]
image = ""
caption = "Getting Started"
+++

Tarant is a JavaScript library that implements the Actor Model, which makes concurrent programming easy to understand
and maintain. Thus, the most important building block of Tarant is the Actor. This getting started guide will walk you
through the basic flow of starting an Actor System (which holds actor references) and your first actor, in a running
application.

## Setting up Tarant

The only step needed for using Tarant is installing the library. It's already pushed in the npm registry, 
so you can download it either using npm or yarn:

```sh
npm install tarant --save
```
```sh
yarn add tarant
```

Now you are ready to start.

## Defining your first Actor

Tarant implements a new building block to ES6, the Actor. Actors are objects that are thread-safe and asynchronous in a way
that is transparent to the developer. Actors are managed by the Actor System, which holds references to Actors, so you can
create and find them.

First, import tarant into the current file:

```js
const { Actor, ActorSystem } = require('tarant')
```

Now, you can create your first Actor class. Creating an Actor class is like creating an ordinary ES6 class, but you will
need to extend Actor.

We will create an Actor with a single method, that will print something to the console.

```js
class Pinger extends Actor {
    ping() {
        console.log('Ping!')
    }
}
```

## Starting an Actor System

For using the actor, you will need to create first an Actor System. The actor system is used by all actors in an application,
so you usually will need to create it only once and reuse whenever you need it.

```js
const system = ActorSystem.default()
``` 

Now, you can create a new Actor of type Pinger using your freshly created actor system.

```js
const pinger = system.actorOf(Pinger)
```

Using your actor is as easy as using any other object instance. You can now call the ping method.

```js
pinger.ping()
```

## Freeing the Actor System

The application will keep running until you free the actor system. Freeing the actor system will clean up all
actor instances and then stop the process, so the application can stop gracefully. To stop the actor system,
call the `free` method on it.

```js
system.free()
```

## What's next

There are several features that were not covered in this getting started guide, but they can be useful
for complex applications. You can see them in the [main documentation](/tutorial/_index.md).

You can also take a look [at the examples repository](https://github.com/tarantx/Typescript-Examples), 
to download ready to start examples where you can play and investigate more about actors.

## CodePen

If you want to see a similar CodePen, to run the example and change it, feel free to use this one:

<p data-height="320" data-theme-id="0" data-slug-hash="YdxWJP" data-default-tab="js,result" data-user="kmruiz" data-pen-title="tarant pinger example" class="codepen">See the Pen <a href="https://codepen.io/kmruiz/pen/YdxWJP/">tarant pinger example</a> by Kevin Mas Ruiz (<a href="https://codepen.io/kmruiz">@kmruiz</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>