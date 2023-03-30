---
title: Mockserver
categories:
  - web
docs:
  - id: java
    url: https://www.testcontainers.org/modules/mockserver/
    example: |
      ```java
      var mockServer = new MockServerContainer(DockerImageName
        .parse("mockserver/mockserver:5.15.0"));
      mockServer.start();
      ```
description: |
  MockServer allows you to mock any server or service via HTTP or HTTPS, such as a REST or RPC service.
---