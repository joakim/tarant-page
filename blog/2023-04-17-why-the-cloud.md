---
authors: kmruiz
title: "Why are we building the tarant cloud?"
tags:
  - cloud
  - product
description: We are working on something... 
draft: true
published: 2023-04-17T09:00:00.000Z
organization_id: 6881
---

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

Both [@kanekotic](https://github.com/kanekotic) and [myself](https://github.com/kmruiz) are software developers: we've are, and been leading teams of 
different sizes and diversities, with different problems, build software.  We are still doing this from different aspects of the delivery timeline of a project. 
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
so you can handle transparently with the minimum amount of cost, your workload.

However, there are a few challenges here:

* How do we know when to scale up and down?
* How much does it cost to scale-up and down?
* What do we scale up and down and how?

Some of these challenges are tackled by the **serverless model**, with a pay per consumption model, with scale-to-zero capabilities. Let's take an example on how
[AWS Lambda](https://aws.amazon.com/lambda/) handles it, as it's of the main leads in serverless computing.

