---
title: RabbitMQ
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/rabbitmq/
    example: |
      ```java
      var rabbit = new RabbitMQContainer(DockerImageName.parse("rabbitmq:3.7.25-management-alpine"));
      rabbit.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var rabbitMqContainer = new RabbitMqBuilder().Build();
      await rabbitMqContainer.StartAsync();
      ```
description: |
  RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.
---