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

This tutorial assumes that you already know the basic theory of tarant and the actor model. You can read the basics in [Thinking in Tarant](./thinking-in-tarant).

## What are you building

In this tutorial you will be building an interactive chat that runs on the same browser. There won't be any network connectivity outside (to simplify). It will look like:

<iframe src="https://codesandbox.io/embed/tarant-chat-complete-example-vdwk96?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style={{ width: "100%", height: "500px", border: "0", borderRadius: "4px", overflow: "hidden"}}
     title="lucid-pateu-vdwk96"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## The Architecture

In tarant, it is common to map components to actors. Each component, at the end, has it's own lifecycle, state and behaviour, and you want it to be isolated and
transactional. As we are going to have two big components (both chat windows), we can create one single Actor and create two instances of the actor.

![How components interact](./images/1-example-app/1-component-interaction.png)

## Setup for the tutorial

During this tutorial, we will be using CodeSandbox, so you don't need to prepare a local environment to start playing with tarant. To open the tutorial,
click on the following button:

<a href="https://codesandbox.io/s/tarant-initial-example-wcjo5v?editorsize=50&fontsize=14&hidenavigation=1&runonclick=1" method="GET" target="_blank">
<button class="button button--primary">
<svg width="1em" height="1em" style={{ marginLeft: "4px", marginRight: "4px", marginTop: "0.5em", padding: "0" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z" fill="currentColor"></path><path d="M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z" fill="currentColor"></path></svg>
Fork CodeSandbox
</button>
</a>

<div class="alert alert--primary" style={{"margin-top": "1em", "margin-bottom": "1em", "padding-bottom": "4px"}} role="alert">

  **You can also develop applications with tarant locally.** You need to download [Node.js](https://nodejs.org/en/). Before continuing, install the 
  latest stable version for your operating system.

  1. Now, you can download the tutorial by clicking the in the following button:

  <a href="https://codesandbox.io/s/tarant-initial-example-wcjo5v?editorsize=50&fontsize=14&hidenavigation=1&runonclick=1" method="GET" target="_blank">
    <button class="button button--primary">
    <svg width="1em" height="1em" style={{ marginLeft: "4px", marginRight: "4px", marginTop: "0.5em", padding: "0" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z" fill="currentColor"></path><path d="M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z" fill="currentColor"></path></svg>
    Fork CodeSandbox
    </button>
  </a>

  2. In the opened CodeSandbox tab, navigate to `Top Left Menu > File > Export To ZIP`.
  3. Decompress the ZIP File you just downloaded.
  4. Navigate to the new folder using the terminal and run the following command:
  ```sh
  npm i
  ```
  5. To start the development environment, run the following command:
  ```sh
  npm start
  ```

</div>

## The Development Environment

When you clicked on the Fork button, it opened a new tab with a CodeSandbox environment. It has everything you need to start coding. You'll see something similar to this:

![How components interact](./images/1-example-app/2-dev-env.png)

1. This is the folder structure of the project. All files will be stored there. For example, `index.html` is the root page of the project. `index.js` is where your JavaScript code will be living. You will be working in the JavaScript file.
2. This is the current open file. You will be able to modify the code here.
3. This is the preview. Every time you change the JavaScript file, your changes will be shown here,

Now, open the `index.js` file by clicking on it. If it's not visible in the panel, click on the `src` folder to open it, and you'll be able to see the `index.js` file.
Essentially, this is your application! Let's go line by line on the code:

```js
import { html, render } from "lit-html"; // (1)
import { Actor, ActorSystem } from "tarant"; // (2)
import "./styles.css"; // (3)

const system = ActorSystem.default(); // (4)
```

1. This is what we call an `import` statement. It allows you to import a dependency. Here, we are importing the `lit-html` library, that will
allows us to render our components.
2. This is another `import` statement, but this time we are importing `tarant`'s Actor and ActorSystem classes.
3. This is another `import` statement, that allows `Parcel` to import the CSS styles into the final bundle.
4. This line creates an ActorSystem with the default configuration.

An ActorSystem is where all our actors are going to live. Actors are tied to the actor system, and allows us to interact easily with them. Right now,
our actor system does not contain any actor, but we will fix that later.

## The ChatWindow Actor

Now we are going to create our first actor. If you remember the diagram we did before, the actor is going to represent the chat window, that contains
both the chat box (where all our messages are going to be rendered), the input box and the button that we will use to send messages to the next chat window.

![This is the diagram](./images/1-example-app/1-component-interaction.png)