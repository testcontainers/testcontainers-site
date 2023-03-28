---
title: Azure
categories:
  - cloud-platform
docs:
  - id: java
    url: https://www.testcontainers.org/modules/azure/
    example: |
      ```java
      public CosmosDBEmulatorContainer emulator = new CosmosDBEmulatorContainer(
        DockerImageName.parse("mcr.microsoft.com/cosmosdb/linux/azure-cosmos-emulator:latest")
      );
      ```
description: |
  The Azure SDK delivers a platform for developers to leverage the wide variety of Azure services.
---