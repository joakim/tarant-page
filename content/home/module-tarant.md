+++
# Custom widget.
# An example of using the custom widget to create your own homepage section.
# To create more sections, duplicate this file and edit the values below as desired.
widget = "custom"
active = true
date = 2016-04-20T00:00:00

# Note: a full width section format can be enabled by commenting out the `title` and `subtitle` with a `#`.
title = "modules"
subtitle = ""

# Order that this section will appear in.
weight = 60

+++

<a href="https://github.com/tarantx/tarant">![tarant logo](/img/logo_name.png)</a>
Tarant is the core module. Implements all needed functionality related to the Actor Model, like actor materialization,
resolution, supervision and communication. All of the [showcases listed here](/showcases/) only depend on this module.

<a href="https://github.com/tarantx/tarant-vue">![tarant-vue logo](/img/logo_vue.png)</a>

Tarant-vue integrates [vue.js](https://vuejs.org/) with tarant, so your vue.js components are also actors. Improves
performance, reliability, and simplifies how components are written. You can see a really basic showcase
[here](https://github.com/tarantx/Typescript-Examples/tree/master/vue-js-integration).

<a href="https://github.com/tarantx/tarant-local-storage">
tarant-local-storage
---------------------
</a>

Tarant-local-storage implements implicit persistence of your actors in the web browser. Actors marked to be persisted,
will be stored in the browser `localStorage` and recovered during the start up of the application. It's a basic dependency
for applications with offline mode and shows the potential of tarant, in terms of extensibility. 