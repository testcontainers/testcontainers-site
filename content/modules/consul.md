---
title: Consul
categories:
  - kv-store
docs:
  - id: java
    url: https://www.testcontainers.org/modules/consul/
    example: |
      ```java
      ConsulContainer consulContainer = new ConsulContainer("hashicorp/consul:1.15");
      ```
description: |
  Consul is a service mesh and distributed key-value store.

  With the increasing popularity of Consul and config externalization, applications are now needing to source properties from Consul. This can prove challenging in the development phase without a running Consul instance readily on hand. This module solves integration testing with Consul. You can also use it to test how your application behaves with Consul by writing different test scenarios.
---