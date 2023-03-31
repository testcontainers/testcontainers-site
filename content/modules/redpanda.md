---
title: Redpanda
isOfficial: true
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/redpanda/
    example: |
      ```java
      var redpanda = new RedpandaContainer(DockerImageName.parse("docker.redpanda.com/redpandadata/redpanda:v22.2.1"));
      redpanda.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var redpandaContainer = new RedpandaBuilder().Build();
      await redpandaContainer.StartAsync();
      ```
description: |
  Redpanda is the Kafka-compatible streaming data platform.
---