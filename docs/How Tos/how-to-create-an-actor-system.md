---
sidebar_position: 1
---

# Create An Actor System

Actor Systems hold all the information about the location of all the actors on an application, even if they are
in memory or not. They are composed of:

* [Materializers](/docs/components/materializers)
* [Resolvers](/docs/components/resolvers)
* [A Top Level Supervisor](/docs/components/supervisors)
* [Fibers](/docs/components/fibers)
* [Mailboxes](/docs/components/mailboxes)

There are two main ways to create an Actor System in tarant. One uses the default configuration, and the other
one lets the developer configure most of the advanced fields for customizing the behaviour.

## Default Configuration

Creating an Actor System with the default configuration is just a matter of calling a single static method. Let's assume
that you already have a javascript file, first you will need to import the ActorSystem class from the main package:

```js
const { ActorSystem } = require('tarant')
```

After importing the ActorSystem, you will need to call the `default` static method in ActorSystem and it will return a freshly
created ActorSystem with a running, default configuration.

```js
const system = ActorSystem.default()
```

## Using Custom Configuration

The ActorSystem is a complex object because it has several responsibilities, like the orchestration of different components.
To simplify the configuration we provide a configuration builder with a set of methods to change the default configuration.
Is worth to note that any not changed field will remain with the default configuration, which is usually enough for most
applications.

To use the configuration builder, you will need first to import it from the main package:

```js
const { ActorSystem, ActorSystemConfigurationBuilder } = require('tarant')
```

Then you can create your configuration using the builder, as in:

```js
const localStorageRepository = new LocalStorageRepository()
const configuration = ActorSystemConfigurationBuilder.define()
  .withMaterializers([new VueRenderer(), localStorageRepository]) 
  // Render actors with vue.js and store their state in the localStorage of the browser
  .withResolvers([localStorageRepository])
  // When a non existing actor is requested, try to resolve them in the localStorage of the browser
  .done()
```

And then, call the static constructor named `for` in the ActorSystem to provide the new configuration:

```js
const system = ActorSystem.for(configuration)
```

## Freeing the Actor System

You can always stop the Actor System using the provided `free` method. It will stop all actors and stop all fibers.

```js
system.free()
```
