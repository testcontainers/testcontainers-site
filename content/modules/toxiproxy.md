---
title: Toxiproxy
categories:
  - web
docs:
  - id: java
    url: https://www.testcontainers.org/modules/toxiproxy/
    example: |
      ```java
      var toxiproxy = new ToxiproxyContainer(DockerImageName.parse(("ghcr.io/shopify/toxiproxy:2.5.0"));
      toxiproxy.start();
      ```
description: |
  Toxiproxy is a framework for simulating network conditions. It's made specifically to work in testing, CI and development environments, supporting deterministic tampering with connections, but with support for randomized chaos and customization.
---