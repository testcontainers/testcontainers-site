---
title: Oleg Nenashev
role: Gradle
country: CH
languages:
  - dotnet
  - go
  - java
  - kotlin
  - rust
  - c
socialLinks:
  - id: twitter
    label: "@oleg_nenashev"
    url: https://twitter.com/oleg_nenashev
  - id: sessionize
    label: Sessionize
    url: https://sessionize.com/onenashev/
---
## Bio
Oleg is a community builder and DevRel consultant working on the Gradle Build Tool. He's passionate about developer experience, open source software and open hardware. Oleg is a Jenkins maintainer, GSoC mentor and  the creator of Testcontainers for C/C++. He is a CNCF/CDF ambassador. Oleg has a PhD degree in electronics design and volunteers in organizations helping Ukrainian military and refugees.

## Q&A
### What were your first experiences with Testcontainers?
Replacing the in-house Docker container based integration test library in Jenkins

### What’s your favourite Testcontainers module?
WireMock :P

### What are your favourite features for Testcontainers?
Container suspension and on-demand builds

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
I was prototyping a Testcontainers plugin for Jenkins which would provide a wrapper for Jenkins pipelines provisioning containers. It kind of worked and would have been a cool addition to the ecosystem, but it was blowing up on Java 11 because *legit* class loading stacktraces were eating up all the memory when container initialization was failing. I solved it later but unfortunately I've never published the plugin itself.