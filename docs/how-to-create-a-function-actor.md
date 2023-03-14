---
sidebar_position: 5
---

Sometimes creating a whole actor is not needed because the problem to solve is relatively simple and a set of
functions is enough. Tarant contemplates this scenario allowing the developer to write `function actors`, that
benefit from some of the properties of actors, but are simpler.

* They are asynchronous and non-blocking
* They can be composed
* They partially benefit from materializers

However, there are some drawbacks compared to normal actors:

* They can not subscribe to topics
* They are stateless, so some materializers won't work
* They **must** return promises or nothing at all (like callbacks)

To create an actor function, [you need a running actor system](/tutorial/how-to-create-an-actor-system):

```js
const system = ActorSystem.default()
```

And then wrap the function calling the `functionFor` method in the system:

```js
const sumActor = system.functionFor(async (a, b) => a + b)
```

And you can call it as a normal async function:

```js
const result = await sumActor(5, 15)
expect(result).toBe(20)
```