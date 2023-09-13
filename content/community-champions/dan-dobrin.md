---
title: Dan Dobrin
role: Google
country: CA
languages:
  - java
socialLinks:
  - id: github
    label: ddobrin
    url: https://github.com/ddobrin
  - id: twitter
    label: "@ddobrin"
    url: https://twitter.com/ddobrin
---
## Bio
Dan Dobrin is an Enterprise App Modernization Architect in Google Cloud, helping teams adopt modern cloud-native patterns, practices and technologies in Google Cloud Serverless and GKE. A long time Java and Spring user, in recent years he has focused on native images, event-driven architecture, production-readiness and serverless optimization. 

Prior to joining Google Cloud, he built highly scalable, low-latency, flexible frameworks for technology, security and financial services organizations.

An avid learner, he’s always looking for the next practical idea to experiment; never bored.

## Q&A
### What were your first experiences with Testcontainers?
Cora Iberkleid pointed Testcontainers out to me when we were both at VMware in 2021. I was looking at a few large cloud services and thinking how much effort it would take me to config and maintain all my service integrations.

The tipping point at scale was at the beginning of 2022 when I was working with a Dev team building microservices using Google Cloud Spanner and Firestore. Introduced them to Testcontainers and the associated Google Cloud Emulators and, a couple of weeks later, I find out that the entire team started using them.

### What’s your favourite Testcontainers module?
You always need a database or messaging system for your app and Toxiproxy is really useful for a cloud environment.

### What are your favourite features for Testcontainers?
Having the ability to use them consistently not only for testing, but throughout the entire inner loop. I love the new feature of being able to work on my main app, starting it locally, debugging, without having to manually start or manage service dependencies. 

The ability to control the lifecycle of the dependencies, with the choice of reusing or discarding containers, is very helpful.

Ability to test resiliency for cloud-native applications is a staple recommendation for any dev team.

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
First it was finding out SQL Dialect differences between H2, HSQLDB and Postgres in apps.

Lately, I showed dev teams how to run local load tests with Testcontainers and clear some memory leaks.