---
title: Kafka
categories:
  - message-broker
docs:
  - id: java
    url: https://java.testcontainers.org/modules/kafka/
    example: |
      ```java
      var kafka = new KafkaContainer(DockerImageName.parse("confluentinc/cp-kafka:6.2.1"));
      kafka.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/kafka/
    example: |
      ```go
      kafkaContainer, err := kafka.RunContainer(ctx, testcontainers.WithImage("confluentinc/confluent-local:7.5.0"))
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Kafka
    example: |
      ```csharp
      var kafkaContainer = new KafkaBuilder()
        .WithImage("confluentinc/cp-kafka:6.2.10")
        .Build();
      await kafkaContainer.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/kafka/
    example: |
      ```javascript
      const kafkaContainer = await new KafkaContainer().withExposedPorts(9093).start();
      ```
description: |
  [Apache Kafka](https\://kafka.apache.org) is an open-source distributed event streaming platform for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.
  This module allows you to run a single node Kafka installation with just a few lines of code.

  Even better you don't need to manage an external Zookeeper installation. By default it'll run in the same container where Kafka broker is running, you can also programmatically configure to run Zookeeper in another container or run Kafka with KRaft enabled.

---

The module helps to configure your application or tests to connect to the broker exposing convenience API.

For example, in Java getting the bootstrap servers url is one method call away: `kafka.getBootstrapServers()`

And if your setup needs other services to access Kafka, for example you want to run a Schema Registry or a Confluent Control Center, you can put your Kafka container on the `Network` and expose it to both applications and tools running in other containers and applications running on your host machine.

## Next steps

* Try it yourself with the [Testing Spring Boot Kafka Listener using Testcontainers](https://testcontainers.com/guides/testing-spring-boot-kafka-listener-using-testcontainers/) guide
* Read the blog post [Testing Kafka Applications with Testcontainers](https://www.atomicjar.com/2023/06/testing-kafka-applications-with-testcontainers/)

