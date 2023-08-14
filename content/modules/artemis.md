---
title: Artemis
categories:
  - message-broker
docs:
  - id: go
    url: https://golang.testcontainers.org/modules/artemis/
    example: |
      ```go
      artemisContainer, err := artemis.RunContainer(ctx, testcontainers.WithImage("docker.io/apache/activemq-artemis:2.30.0-alpine"))
      ```

description: |
  Apache ActiveMQ Artemis is an open source project to build a multi-protocol, embeddable, very high performance, clustered, asynchronous messaging system.
---