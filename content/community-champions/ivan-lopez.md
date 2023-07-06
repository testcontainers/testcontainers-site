---
title: Iván López
role: VMware
country: ES
languages:
  - java
socialLinks:
  - id: twitter
    label: "@ilopmar"
    url: https://twitter.com/ilopmar
---
## Q&A
### What were your first experiences with Testcontainers?
I don't remember when exactly but it was about 5 years ago. It was probably because I already knew Sergei and he was very active with it so I guess that's how I learned about it. It was "love at first sight" because I've always cared a lot about testing but setting up everything for integration tests was tricky and messy.

### What’s your favourite Testcontainers module?
The one I used the most is Postgresql but I've written cool test with Mockserver and Localstack

### What are your favourite features for Testcontainers?
I really like how easy is to configure it in my projects and have a real dependency running for my tests in a couple of minutes, just adding some dependency, a few annotations and that's it!

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
I have a use case. I needed to sign some OCI artifacts (Containers, Helm Charts,...) simulating the Cosign CLI tool, but in my Java application we are not actually executing nor embedding Cosign CLI. I managed to mimic its behavior to sign the artifacts like Cosign just using plain Java and BouncyCastle. Everything was working properly but I needed to write a proper integration test to make sure that after signing the container with my Java code, Cosing CLI was able to verify the signature.

Using a GenericContainer I was able to run "bitnami/cosign" container (that actually runs the CLI), put that container in the same Docker Network as my Registry that was running in another container during the test. My application pushed the container to the local Registry, signed it and pushed the signature, and then I was able verify it was valid. Everything in a really simple integration test powered by Testcontainers.