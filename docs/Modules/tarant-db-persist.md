---
sidebar_position: 3
---

# Tarant DB Persist

Provide the capabilities to actors on the backend to be persisted using waterline adapters.

## Installation

add it to your project using `npm install tarant-db-persist --save` or `yarn add tarant-db-persist`

## Usage

Initialize the sync client with the waterline adapter from the persist storage you will be interested on

```js
import { ActorSystem, ActorSystemConfigurationBuilder } from 'tarant';
import * as diskAdapter from 'sails-disk';
import { PersistResolverMaterializer } from 'tarant-db-persist';
import AppActor from '../AppActor';

const config = {
    adapter: diskAdapter,
    actorTypes: { AppActor }
  };

const persister = await PersistMaterializer.create(config)

const system : any = ActorSystem.for(ActorSystemConfigurationBuilder.define()
    .withMaterializers([persister])
    .withResolvers([persister])
    .done())  

```

your actors will require to implement IUpdatable (UpdateFrom) and IExportable (toJson)

```js
import { Actor } from "tarant";
import { IUpdatable, IExportable } from "tarant-db-persist"

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

##### Created my free [logo](https://logomakr.com/8lSyYS) at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> 