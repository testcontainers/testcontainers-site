---
title: LocalStack
isOfficial: true
categories:
  - cloud-platform
docs:
  - id: java
    url: https://www.testcontainers.org/modules/localstack/
    example: |
      ```
      var localstack = new LocalStackContainer(DockerImageName.parse("localstack/localstack:0.11.3"));
      localstack.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```
      container, err := localstack.StartContainer(ctx)
      ```
  - id: dotnet
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```
      ```
description: |
  LocalStack is a fully functional local AWS cloud stack. This module allows you to develop your cloud and serverless apps without actually using the cloud.
---