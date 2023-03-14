---
sidebar_position: 5
---

Resolvers let us find actors that have been persisted in external systems, like databases or storages. One example
of resolver, is the [tarant-local-storage](https://github.com/tarantx/tarant-local-storage) module, which let us recover
actors that have been persisted in the local storage, without losing information.

Resolvers must implement the following method:

* `resolveActorById(id: string): Promise<Actor>`. If the actor exists in the storage, return a promise of the configured
actor, if not, returns a promise with undefined.