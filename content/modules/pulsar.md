---
title: Pulsar
isOfficial: true
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/pulsar/
    example: |
      ```java
      var pulsar = new PulsarContainer(DockerImageName.parse("apachepulsar/pulsar:2.10.0"));
      pulsar.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/pulsar/
    example: |
      ```go
      container, err := pulsar.StartContainer(ctx,
        pulsar.WithPulsarImage("apachepulsar/pulsar:2.10.0"),
        pulsar.WithPulsarEnv("brokerDeduplicationEnabled", "true"),
        pulsar.WithFunctionsWorker(),
        pulsar.WithTransactions(),
      )
      ```
description: |
  Apache Pulsar is an open-source, distributed messaging and streaming platform. Messages can be consumed and acknowledged individually or consumed as streams with less than 5ms of latency.
---