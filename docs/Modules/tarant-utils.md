---
sidebar_position: 2
---

# Tarant Utils

Provide a set of utils that help apply some of the paterns that tarant uses.

## Installation

add it to your project using `npm install tarant-utils --save` or `yarn add tarant-utils`

## Usage

### Decorator

We recomend to use the decorator pattern to keaping separation of concerns in between the business logic of an actor and the logic that some of the resolvers and materializers require.

For example having the next actor

```js

class AppActor extends Actor {

  constructor(name: string) {
      super(name)
  }

  public addOne() : void {
      this.counter++
  }

   public counter = 1; 
}
```
the definition of the serialization information could be done like
```js
class SerializationDecorator extends decorator<AppActor> {
    constructor(actor: AppActor) {
        super(actor)
    }

    toJson() {
        return {
            id: this.actor.id,
            type: "AppActor",
            counter: this.actor.counter
        }
    }

    updateFrom({ counter }: any): void {
        this.actor.counter = counter
    }
}
```
and the mix the actor and the decorator for it to be resolved in the actor system that is registered
```js
const DecoratedActor = decorate(AppActor, SerializationDecorator)
export default DecoratedActor
```