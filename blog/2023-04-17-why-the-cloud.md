---
authors: kmruiz
title: "Tarant Cloud: Talk, Communicate and Solve"
tags:
  - cloud
  - product
description: An approach for a common abstraction level 
draft: false
published: 2023-04-17T09:00:00.000Z
organization_id: 6881
---

![An approach for a common abstraction level](/img/why-tarant-post-title.png)

## The current scenario

Working on software based solution is a complex task that requires a cohort of very different roles that interact together to design, build, test, deploy and monitor
the product. Complexity grows with requirements, given more features, less reliable is to build on top of that software and becomes problematic. The community
worked on different solutions for all the set of problems that we, as software developers, need to solve to put our software, working, in production.

These solutions span lots of different aspects of the essential complexity of our work:

* We have frameworks that help us design a solution abstracting ourselves from the complexities of the underlying platform.
* We testing libraries that allows us to verify our applications to ensure correctness.
* We have tools that allows us to monitor our applications in production.
* We have toolkits that allows us to deploy our infrastructure in a scalable way.

And there are many other cross-cutting concerns, like security, performance, accessibility, and so on.

We as an industry, are having a bad time handling all this complexity properly, as we are still young and growing extremely fast. With growth, comes also additional
problems, like sociotechnical challenges, resource management, financial operations and a wide list of others that could be included here.

For this post, we are going to talk about production complexity and billing.

Both [@kanekotic](https://github.com/kanekotic) and [myself](https://github.com/kmruiz) are software developers, leading teams of different sizes and diversities,
with different problems, building software.  We are still doing this from different aspects of the delivery timeline of a project. 
This allows us to understand the software industry from a wider level and to understand where and how we are struggling.

Digging on the feedback we've gathered, we've found the following list of challenges that are common and hardly resolved:

* How do we ensure the scalability of our system within a reasonable cost?
* How do we ensure the evolution of our system to the requirements within a reasonable timeframe?
* How do we simplify the overall architecture while increasing the capacity of adaptation?
* How do we ensure that the application is behaving correctly in production and that we detect when it doesn't?

Let me give an example of all these cases:

### How do we ensure the scalability of our system within a reasonable cost?

System scalability is a complex topic, as it depends on usage patterns of customers. Essentially, and ideally, you want to scale down your application and 
dependencies when there is less load in your systems, reducing costs, but you want to increase the capacity of your system moments before the load increases,
so you can handle transparently with the minimum amount of cost increase, your workload.

However, there are a few challenges here:

* How do we know when to scale up and down?
* How much does it cost to scale up and down?
* What do we scale up and down and how?

Some of these challenges are tackled by the **serverless model**, with a pay per consumption model, with scale-to-zero capabilities. Let's take an example on how
[AWS Lambda](https://aws.amazon.com/lambda/) handles it, as it's of the main leaders in serverless computing.

* To use an AWS Lambda, you just need to upload a .zip to Lambda, and AWS takes care of everything.
* You have to choose CPU and Memory, this affects how the Lambda is billed. Essentially, Lambda would choose the suitable amount of CPU based on the memory allocated, but it's common to overprovision memory for more CPU power.
* Lambdas are billed every 100ms, so a function that takes a few ms is billed for 100ms.
* Lambdas also suffer `cold starts`, what essentialy means that scalability is affected under some runtimes.

Lambdas are a wonderful tool, but they are also problematic for billing provisioning. How much is a lambda going to cost overall per month? It's extremely hard
to measure properly. There are some calculators, like the one from [dashbird](https://dashbird.io/lambda-cost-calculator/) that does some simple calculations but
it's often not reliable enough because the Lambda billing model is extremely complex.

There are other solutions, of course, like VM reservation, using Kubernetes or something like Fargate, to simplify billing, but they have other types of challenges, 
like how many VMs should we reserved, what size, and how to ensure workload is distributed evenly.

### How do we ensure the evolution of our system to the requirements within a reasonable timeframe?

Software that is useful changes. With these changes, comes technical debt, and an increase amount of complexity. This complexity likely increases with
accidential decisions that weren't aware of the future of the software itself. It is common to patch forward features into the current design until
the software development process becomes a bottleneck.

### How do we simplify the overall architecture while increasing the capacity of adaptation?

The actor model tries to solve these issues by simplifying the overall architecture of software. Instead of complex patterns and layered softwares that
fail to handle concurrency, transactionality and reduced performance, we just have a set of long living objects that interact between them in an ordered
manner. Also, tarant has other properties, like `actor universality` where an actor can run transparently both in a client application and a server.

### How do we ensure that the application is behaving correctly in production and that we detect when it doesn't?

Here raises the complexity, as developers need to monitor their software in production, but there is a language gap between how we monitor systems and how we build
them. It's not uncommon finding developers uncomfortable understanding how to scale their system based on CPU or memory usage. Nowadays, for lots
of systems, disk usage has been delegated to databases, but CPU, Memory, Network, Locks... are still relevant for production-level applications.

## How do we see the future of computing in tarant?

We want teams to talk, communicate and solve in a common abstraction level. For us, complexity lies in jumping across different levels of abstractions during
the design, development and delivery process. Information is lost during this long jumps, requirements become unclear across teams and tight deadlines forces
teams to focus on high-visibility low-value work, delivering uncomplete features, without security best practices, on top of expensive infrastructure.

We are sure that using the actor model, and specific conventions and best practices on top of that, can raise the bar. By increasing the abstraction level, we can
assume optimisations, simplify the development model and improve how monitoring and observability works. To this, to work, means that we are not developing
anything generic, but will built on top of tarant and for tarant.

Our principles are:

* No additional concepts: all features are tarant based and using already known tarant concepts.
  * Only think about actors, topics, messages and systems.
* Secure by default
  * Secure options **must** be easier, or as easy as insecure ones.
* Simplicity by design
  * Design your application, we build your infrastructure on top of that.
* No surprises
  * Scale up and down without a surprise on your bill.

We have lots of ideas, we have lots of opportunities, and we want to build together. We are developing a closed beta that is already accepting requests to test
the cloud. We will be giving access incrementally, *totally free* to the initial, limited version of the cloud.
If you want to know more about tarant, [check our tutorials](https://www.tarant.dev/docs/category/quick-start). 
If you want to join the beta, check [our home page, as we have a contact form in there](/). 
No private information is shared with anyone, and the only communications we will share are strictly related to the beta itself. 
If you are interested on talking with us directly, we have a [gitter room](https://app.gitter.im/#/room/#tarantx_general).
