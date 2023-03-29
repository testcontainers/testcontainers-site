---
title: Azure
categories:
  - cloud-platform
docs:
  - id: java
    url: https://www.testcontainers.org/modules/azure/
    example: |
      ```java
      var cosmos = new CosmosDBEmulatorContainer(
        DockerImageName.parse("mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator:latest")
      );
      cosmos.start();
      ```
description: |
  The Azure SDK delivers a platform for developers to leverage the wide variety of Azure services.
---