---
sidebar_position: 7
---

# Tarant React

## Motivation

Provide the capabilities to actors to be render using the react framework.

## Installation

add it to your project using `npm install tarant-react --save` or `yarn add tarant-react`

## Usage

Extend the react actor with a template and the properties to bind to the id of the actor will relate to the html component id

```js
import React from "react";
import { decorator } from "../../utils/decorator"
import { AppActor } from "../AppActor"

export class ReactDecorator extends decorator<AppActor> {
    constructor(actor: AppActor) {
        super(actor)
    }

    render() {
        return (<div id="app"><button onClick={(this.actor as any).self.addOne}>{this.actor.counter}</button></div>)
    }

}
```

Initialize the actor system with the provided materializer
```js
import { ActorSystem, ActorSystemConfigurationBuilder } from 'tarant'
import AppActor from './Actor/AppActor';
import { ReactRenderer } from 'tarant-react';

window.onload = () => {
  const system = ActorSystem.for(ActorSystemConfigurationBuilder.define()
  .withMaterializer(new reactRenderer())
  .done())  
  system.actorOf(AppActor)
}
```