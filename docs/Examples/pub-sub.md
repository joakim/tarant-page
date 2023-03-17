---
sidebar_position: 2
---

# Pub Sub

This example demonstrates how Actors process messages independently. When you press the `+1` button, you will see how
there are two counters, one that updates fast, and one that updates slower.

Load is simulated using a sleep function with a setTimeout.

## Features used

* *Topics*: Topics encapsulate communication between actors in a fan out basis. Each actor subscribed to a topic will
eventually receive messages *in guaranteed order*. In this specific use case, the `+1` button is sending, each time
the user clicks on it, a message through a topic.
* *Async Actors*: Async actors with promises are already part of Tarant. Any method that is marked as async will be
handled asynchronously and non-blocking by Tarant, and messages are guaranteed to be processed in order.

## Live Example

<iframe height="300" scrolling="no" title="tarant quick-start example" src="https://codepen.io/kmruiz/embed/GPvGEX?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kmruiz/pen/GPvGEX">
  tarant quick-start example</a> by Kevin Mas Ruiz (<a href="https://codepen.io/kmruiz">@kmruiz</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>