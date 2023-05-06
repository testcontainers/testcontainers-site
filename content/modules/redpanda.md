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
  - id: go
    url: https://golang.testcontainers.org/modules/redpanda/
    example: |
      ```go
      redpandaContainer, err := redpanda.RunContainer(ctx, testcontainers.WithImage("docker.redpanda.com/redpandadata/redpanda:v23.1.7"))
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Redpanda
    example: |
      ```csharp
      var redpandaContainer = new RedpandaBuilder()
        .WithImage("docker.redpanda.com/redpandadata/redpanda:v22.2.1")
        .Build();
      await redpandaContainer.StartAsync();
      ```
description: |
  Redpanda is the Kafka-compatible streaming data platform.
---