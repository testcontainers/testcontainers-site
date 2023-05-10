---
title: LocalStack
isOfficial: true
categories:
  - cloud
docs:
  - id: java
    url: https://www.testcontainers.org/modules/localstack/
    example: |
      ```java
      var localstack = new LocalStackContainer(DockerImageName.parse("localstack/localstack:0.11.3"));
      localstack.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```go
      container, err := localstack.RunContainer(ctx, testcontainers.WithImage("localstack/localstack:1.4.0"))
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.LocalStack
    example: |
      ```csharp
      var localStackContainer = new LocalStackBuilder()
        .WithImage("localstack/localstack:2.0")
        .Build();
      await localStackContainer.StartAsync();
      ```
description: |
  LocalStack is a fully functional local AWS cloud stack. This module allows you to develop your cloud and serverless apps without actually using the cloud.
---