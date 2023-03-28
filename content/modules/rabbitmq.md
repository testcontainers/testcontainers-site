---
title: RabbitMQ
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/rabbitmq/
    example: |
      ```java
      RabbitMQContainer container = new RabbitMQContainer();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var rabbitMQContainer = new RabbitMQBuilder().Build();

      await rabbitMQContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  RabbitMQ is an open-source message-broker software that originally implemented the Advanced Message Queuing Protocol and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol, MQ Telemetry Transport, and other protocols.
---