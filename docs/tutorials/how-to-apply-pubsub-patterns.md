---
sidebar_position: 4
---

# Apply Pub/Sub Patterns

Tarant implements a basic, but powerful pubsub mechanism named topics. A topic is a stream of events that are sent to 
all subscribers of the topic. For example, if we send the event `hello` to the topic `salutations`, and there are 
three subscribers, all of them will receive a copy of `hello`.

Messages send through a topic are guaranteed to be processed only once by the topic and in order.

## How to create a Topic

A Topic, [like an actor](/tutorial/how-to-create-an-actor), has a protocol. All subscribers to that topic need to satisfy also
the protocol of the topic. For example, if we have a protocol:

```js
foo()
bar()
```

All subscribers of the topic will need to implement foo() and bar().

So first, we need to define a protocol:

```js
class UserEvents {
  onUserRegistered(username) {}
}
```

And then we need to create an actor protocol that satisfies the UserEvents protocol.

```js
class EmailSender extends Actor {
  onUserRegistered(username) {
    sendEmailTo(username)
  }

}
```

Now we can create a topic for that protocol and subscribe to it:

```js
const topic = Topic.for(system, 'user-events-topic', UserEvents)
topic.subscribe(system.actorOf(EmailSender))
```

For sending a message through a topic, we need to call the method that represents the message:

```js
topic.onUserRegistered('dante')
```

And all subscribers of that topic will receive the message. Is worth to note that a topic is also an actor,
so all properties of an actor also apply for topics.

Fore a example on how to use PubSub, you can [see the showcase about pubsub](/showcases/pub-sub).