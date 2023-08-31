---
title: NATS
categories:
  - message-broker
docs:
  - id: go
    url: https://golang.testcontainers.org/modules/nats/
    example: |
      ```go
      container, err := nats.RunContainer(ctx, testcontainers.WithImage("nats:2.9"))
      ``````
  - id: nodejs
    url: https://node.testcontainers.org/modules/nats/
    example: |
      ```javascript
      const container = await new NatsContainer().start();
      ```
description: |
  NATS is an open-source messaging system that enables applications to securely communicate across any combination of cloud vendors, on-premise, edge, web and mobile, and devices.
---