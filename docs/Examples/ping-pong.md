---
sidebar_position: 1
---

# Ping Pong

This example shows how actors can call each other without blocking themselves.

## Features used

* *Async Actors*: Async actors with promises are already part of Tarant. Any method that is marked as async will be
handled asynchronously and non-blocking by Tarant, and messages are guaranteed to be processed in order.

## Live Example

<iframe height="300" scrolling="no" title="tarant ping pong example" src="https://codepen.io/kmruiz/embed/KbvBqm?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kmruiz/pen/KbvBqm">
  tarant ping pong example</a> by Kevin Mas Ruiz (<a href="https://codepen.io/kmruiz">@kmruiz</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>