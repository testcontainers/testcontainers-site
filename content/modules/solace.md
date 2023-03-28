---
title: Solace PubSub+
categories:
  - message-broker
docs:
  - id: java
    url: https://www.testcontainers.org/modules/solace/
    isThirdParty: false
    example: |
      ```java
      SolaceContainer solaceContainer = new SolaceContainer("solace/solace-pubsub-standard:10.2")
        .withCredentials("user", "pass")
        .withTopic("Topic/ActualTopic", Service.SMF)
        .withVpn("test_vpn")
      ```
description: |
  Solace PubSub+ is an event streaming, management and monitoring platform that gives you everything you need to design, deploy and manage an event-driven system. Stream events across hybrid, multi-cloud and IoT environments, quickly, reliably and securely. Manage your entire events ecosystem.
---