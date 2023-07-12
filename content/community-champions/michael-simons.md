---
title: Michael Simons
role: Neo4j, Inc.
country: DE
languages:
  - java
socialLinks:
  - id: github
    label: michael-simons
    url: https://github.com/michael-simons
  - id: twitter
    label: "@rotnroll666"
    url: https://twitter.com/rotnroll666
  - id: linkedin
    label: michael-simons
    url: https://www.linkedin.com/in/michael-simons-196712139/
  - id: mastadon
    label: "@rotnroll666"
    url: https://mastodon.social/@rotnroll666
---
## Bio
Michael Simons is a father, husband, and athlete (the latter is probably just wishful thinking).  He is the author of @springbootbuch and the founder of @euregjug. Michael is also a Java Champion, published author, and JUG leader, and currently works on Spring Data and Neo4j-OGM at Neo4j.  In this role, his main focus is providing first-class support of Neo4j in the Spring Environment, but he also enjoys contributing to Test containers, Spring Boot, and Quarkus, among other projects.  Michael writes regularly about Java and software architecture and generally lives at [https://info.michael-simons.eu](https://info.michael-simons.eu).  [You can find his work on GitHub](https://github.com/michael-simons).

## Q&A
### What were your first experiences with Testcontainers?
I am the original create of the Neo4j module, back in 2018.

### What’s your favourite Testcontainers module?
The Neo4j module of course ;) But I do use MariaDB as well for my private projects.

### What are your favourite features for Testcontainers?
You asked me what my favorite module is and my answer actually should be: All of them! Why? Because using them is the same for all of them. Of course you'll need different client libraries to connect to them in many cases, but the essential way of bringing a service up and running is consistent.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
Not necessarily a bug, but the fact that I was able to use Testcontainers and the Neo4j module to bring up not only a leader (core database), but a whole causal cluster.  With the help of the socat container I could create a proxy into the cluster and with the existing waiting strategies, I can orchestrate it and in the end: The whole setup behaves like a single instance. 

This is a big win for me when testing our software (Spring Data Neo4j and others) across a broad range of Neo4j versions.