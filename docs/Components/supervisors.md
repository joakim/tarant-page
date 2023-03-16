---
sidebar_position: 4 
---

# Supervisors

Supervisors are the responsible of handling actor failures and deciding the strategy to recover. There are two types
of supervisors.

## Top Level Supervisor

The Top Level Supervisor is an object that implements the IActorSupervisor interface. The 
[Actor System](/docs/Components/actor-system) delegates all errors to the top level supervisor.

## Actor Supervisor

Actors behalf as supervisors of their child actors. When a child actor fails, the parent will decide
which strategy to follow to recover. When the parent actor doesn't define the supervision strategy, it will
be delegated to the parent of the parent, and so on. If the actor is a root actor (created by the
Actor System itself), the error will be delegated to the top level supervisor.

## Supervision Strategies

There are three supervision strategies:

* `drop-message`: the actor drops the message that we failed to process.
* `retry-message`: the actor retries the message that we failed to process.
* `kill-actor`: the actor that failed is freed, and all information discarded.