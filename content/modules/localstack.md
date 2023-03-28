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
      DockerImageName localstackImage = DockerImageName.parse("localstack/localstack:0.11.3");

      @Rule
      public LocalStackContainer localstack = new LocalStackContainer(localstackImage)
          .withServices(S3);
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```
      ```
  - id: dotnet
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```
      ```
description: |
  LocalStack is a fully functional local AWS cloud stack. This module allows you to develop your cloud and serverless apps without actually using the cloud.
---