---
title: Pulsar
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/pulsar/
    example: |
      ```
      var pulsar = new PulsarContainer(DockerImageName.parse("apachepulsar/pulsar:2.10.0"));
      pulsar.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/pulsar/
    example: |
      ```
      container, err := pulsar.StartContainer(ctx,
        pulsar.WithPulsarImage("apachepulsar/pulsar:2.10.0"),
        pulsar.WithPulsarEnv("brokerDeduplicationEnabled", "true"),
        pulsar.WithFunctionsWorker(),
        pulsar.WithTransactions(),
      )
      ```
description: |
  What is this
---