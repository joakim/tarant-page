+++
title = "Mailboxes"
date = 2018-11-28T00:00:00

[header]
image = ""
caption = "Mailboxes"
+++

Mailboxes are a queue of messages with guaranteed ordering. Mailboxes have a set of useful properties that make them
really powerful:

* **Mailboxes are partitioned**. It means that messages are distributed through partitions, and subscribers can read
from different partitions.
* **Mailboxes are dynamic**. You can subscribe and unsubscribe from a mailbox many times.
* **They guarantee ordered/only once delivery**. Even if an actor can process the same message more than once
(depending on the recovery strategy), the message will be only delivered once by the mailbox.