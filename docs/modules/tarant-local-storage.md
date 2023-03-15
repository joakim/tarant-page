---
sidebar_position: 3
---

# Tarant Local Storage

## Motivation

Usually complex applications need to store offline part of the state, so it can be synced back or reused later. This
module lets tarant store your actors serialized in the local storage and recovered implicitly.

## Installation

Add it to your project using `npm install tarant-local-storage --save` or `yarn add tarant-local-storage`

## Usage

You need to mark which classes need to be exported first. Usually this is done with the `LocalStoragePersisted`  
class decorator.

```js
import { Actor } from "tarant";
import { LocalStoragePersisted } from "tarant-local-storage";

export default class MyPersistedActor extends Actor {
    ...
}
LocalStoragePersisted("MyPersistedActor", MyPersistedActor) // NameOfThePersistedClass (unique), Class constructor
```

And then add the repository as a materializer and as a resolver:

```js
import { ActorSystem, ActorSystemConfigurationBuilder } from 'tarant'
import MyPersistedActor from './actor';
import { LocalStoragePersisted, LocalStorageRepository } from 'tarant-local-storage';

window.onload = () => {
  const repository = new LocalStorageRepository()

  const system = ActorSystem.for(ActorSystemConfigurationBuilder.define()
  .withMaterializers([repository])
  .withResolvers([repository])
  .done())  

  system.actorOf(MyPersistedActor)
}
```
##### Created my free [logo](https://logomakr.com/8pe69n) at <a href="http://logomakr.com" title="Logo Makr">LogoMakr.com</a> 