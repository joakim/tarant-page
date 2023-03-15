---
sidebar_position: 4
---

# Tarant Sync Client

## Motivation

Provide the capabilities to actors to synchronize with a backend.

## Installation

add it to your project using `npm install tarant-sync-client --save` or `yarn add tarant-sync-client`

## Usage

Initialize the sync client with the configuration you desire and add it to your actor system as both a materializxer and a resolver

```js

import { RemoteResolverMaterializer } from "tarant-sync-client";
import AppActor from '../AppActor';

const config : any  = {
    sync: {
        active: true,
        delay: 1000
    },
      paths: {
          pull: "/pull", 
          push: "/push", 
      },
      actorTypes: { AppActor }
}

const remote = new RemoteResolverMaterializer(config)
const system = ActorSystem.for(ActorSystemConfigurationBuilder.define()
.withMaterializers([remote])
.withResolvers([remote])
.done()) 
```

your actors will require to implement IUpdatable (UpdateFrom) and IExportable (toJson)

```js
import { Actor } from "tarant";
import { IUpdatable, IExportable } from "tarant-sync-client"

export default class AppActor extends Actor implements IUpdatable, IExportable {

  constructor(name: string) {
      super(name)
  }

  addOne() {
      this.counter++
  }

  toJson(){
        return {
            id: this.id,
            type:"AppActor",
            counter: this.counter
        }
    }

    updateFrom({ counter }: any): void {
        this.counter = counter
    }

    private counter = 1; 
}

```
## confiuration options
    
1. sync.active: boolean value defining if there should be live updates pull from the backend
2. sync.delay: period of time in miliseconds between updates from the backend
3. paths.pull: path to endpoint for pulling data from the backend
3. paths.push: path to endpoint for pushing data to the backend
4. ActorTypes: objects registering the type of actors that should be sync with the backend 

##### Created my free [logo](https://logomakr.com/6v3WPd) at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> 