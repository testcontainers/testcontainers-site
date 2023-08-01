---
title: James Ward
role: 
country: US
languages:
  - kotlin
socialLinks:
  - id: github
    label: jamesward
    url: https://github.com/jamesward
  - id: twitter
    label: "@antonarhipov"
    url: https://twitter.com
  - id: linkedin
    label: jamesward
    url: https://linkedin.com/in/jamesward
---
## Bio
James Ward is a professional software developer since 1997, with much of that time spent helping developers build software that doesn't suck. A Typed Pure Functional Programming zealot who often compromises on his ideals to just get stuff done.

## Q&A
### What were your first experiences with Testcontainers?
I started using Testcontainers in 2020 and now use it everywhere I can.

### What’s your favourite Testcontainers module?
Kafka

### What are your favourite features for Testcontainers?
Using them in my dev cycle so that I just run & iterate on my app code without having to manually start or manage service dependencies.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
I have some projects where I have a client that needs a server (in the same project) which has service dependencies. For dev & test of the client, I build the server as a container, then start it and its dependencies via Testcontainers. Such a nice DX!