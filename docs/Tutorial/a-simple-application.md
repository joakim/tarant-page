---
sidebar_position: 2
---

# A Simple Application

We are going to build a simple chat application during this tutorial. The chat application will use basic JavaScript in the browser with [Lit](https://lit.dev/).
This concrete example will use [lit-html](https://lit.dev/docs/libraries/standalone-templates/) which is able to render HTML without any specific convention.

How the chat is going to work is relatively simple. We will have a window with two text boxes and two chat blocks. Every time we write in a chat box, the message
will be sent to the other chat window:

![What we are going to do](./images/1-example-app/0-what-we-are-going-to-do.png)

## Before we start

This tutorial assumes that you already know the basics of tarant. You can read the basics in [Thinking in Tarant](./thinking-in-tarant).

## What are you building

In this tutorial you will be building an interactive chat that runs on the same browser. There won't be any network connectivity outside (to simplify). It will look like:

<iframe height="300" style={{"width": "100%", "height": "50vh"}} scrolling="no" title="Example Chat Application" src="https://codepen.io/kmruiz/embed/GRXwrGR?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/kmruiz/pen/GRXwrGR">
  Example Chat Application</a> by Kevin Mas Ruiz (<a href="https://codepen.io/kmruiz">@kmruiz</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## The Architecture

In tarant, it is common to map components to actors. Each component, at the end, has it's own lifecycle, state and behaviour, and you want it to be isolated and
transactional. As we are going to have two big components (both chat windows), we can create one single Actor and create two instances of the actor.

![How components interact](./images/1-example-app/1-component-interaction.png)