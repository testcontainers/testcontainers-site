---
title: HiveMQ
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/hivemq/
    example: |
      ```java
      var hivemqCe = new HiveMQContainer(DockerImageName.parse("hivemq/hivemq-ce")
        .withTag("2021.3"))
      hivemqCe.start();
      ```
description: |
  HiveMQ is an MQTT broker and a client based messaging platform designed for the fast, efficient and reliable movement of data to and from connected IoT devices.
---