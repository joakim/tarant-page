+++
title = "Fibers"
date = 2018-11-28T00:00:00

[header]
image = ""
caption = "Fibers"
+++

Fibers represent green threads with a set of resources. Usually, an application will contain only one fiber (because
JavaScript only exposes one single thread, with an event loop), however, it's possible to have multiple fibers when you
are working with webworkers.

Fibers offer CPU ticks to processors, that will use them to process actor mailboxes.