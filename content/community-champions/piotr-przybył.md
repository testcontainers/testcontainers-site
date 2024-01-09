---
title: Piotr Przybył
role: SoftwareGarden.dev
country: PL
languages:
  - java
socialLinks:
  - id: twitter
    label: "@piotrprz"
    url: https://twitter.com/piotrprz
  - id: linkedin
    label: piotrprzybyl
    url: https://www.linkedin.com/in/piotrprzybyl/
  - id: sessionize
    label: Sessionize
    url: https://sessionize.com/piotr-przybyl/
---
## Bio
Notorious engineer at work and after hours, tracing meanders of the art of software engineering. 

Remote Software Gardener, mostly working in web-oriented Java gardens. Java Champion. Testcontainers Champion. Oracle ACE. 

Programming usually in Java (since 1.3), Scala and Go, but in other languages too. Fan of agility, seen mostly as choosing the right tools and approaches after asking the right questions. 

Developer, trainer and conference speaker. 

In his talks, Piotr covers not only hardcore Java but also software architecture, computer security, and soft-skills.

## Q&A
### What were your first experiences with Testcontainers?
I started using TC for testing Java backends, because boy, maintaining all these mocks, stubs, spies and fakes was a tedious job. And I also was suffering from a high coverage which was still not enough to have confidence and ability to deploy and migrate in prod.

### What’s your favourite Testcontainers module?
There's no single one. I like the DB modules whenever I have to inspect data and the GenericContainer instead of Docker compose. Also, Toxiproxy FTW!

### What are your favourite features for Testcontainers?
As long as you have Docker available, It Just Works™. And no YAML.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
Retrospectively I wish we had TC way before Docker was even a thing. There was a nasty situation (not even a bug per se), causing slow data corruption in the DB. Caused by the fact, that the app wasn't tested for the DB version which the admins upgraded it to. If only we could have and use TC back then, to check how the system saves data to _exactly_ that version, not a dummy mock...