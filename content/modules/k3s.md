---
title: K3S
categories:
  - other
docs:
  - id: java
    url: https://www.testcontainers.org/modules/k3s/
    example: |
      ```java
      var k3s = new K3sContainer(DockerImageName.parse("rancher/k3s:v1.21.3-k3s1"));
      k3s.start();
      ```
description: |
  K3s is a highly available, certified Kubernetes distribution designed for production workloads in unattended, resource-constrained, remote locations or inside IoT appliances.
---