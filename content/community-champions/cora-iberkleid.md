---
title: Cora Iberkleid
role: VMware
country: US
languages:
  - java
socialLinks:
  - id: twitter
    label: "@ciberkleid"
    url: https://twitter.com/ciberkleid
---
## Bio
Cora Iberkleid is a Developer Advocate for Modern Applications at VMware Tanzu, helping developers and enterprises navigate modern practices and technologies, focusing on cloud native architecture, modern CI/CD, Spring, and Kubernetes.Prior to joining VMware, Cora was an Advisory Solutions Engineer at Pivotal. She also spent nearly a decade at Sun Microsystems and Oracle, helping customers design and build enterprise integration applications. Through this experience, she developed an understanding and empathy for complex organizational challenges, and she strives to incorporate this empathy into her everyday work.

## Q&A
### What were your first experiences with Testcontainers?
I initially learned about Testcontainers through a collaboration with my dear friend and colleague, Maria Gabriella Brodi, as we sought to develop a strategy for achieving production-like conditions in early development and local testing stages. This effort culminated in a conference talk that we have presented jointly several times, and in which we focus on the versatility, power, and ease of use of Testcontainers.

### What’s your favourite Testcontainers module?
It may sound simple but a traditional DB is always so useful! I am also really happy to see an example of support for [Cloud Native Buildpacks](https://github.com/eddumelendez/testcontainers-buildpacks-examples/blob/main/src/test/java/com/example/testcontainersbuildpacksexamples/BuildpackTest.java)!

### What are your favourite features for Testcontainers?
I love that all connection plumbing is done quietly and elegantly behind the scenes. I also love how easy it is to choose whether containers are discarded or reused between tests and between test runs. I also love the ability to dynamically set the commands that will run within a simple OS-base container. Most recently, I am loving the idea of using Testcontainers to start up containers not just for unit tests tied to a Unit lifecycle, but as a way to start resources for the main application as well!

### What’s the most memorable bug you managed to reproduce with a test using Testcontainers?
Identifying SQL that is not supported in H2 but is supported in Postgres. Also, identifying code that needs fallbacks to improve resiliency by testing with the Toxiproxy Module. And running my own app as the container under test in order to validate my own API contracts.