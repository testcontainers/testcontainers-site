---
title: LocalStack
logo: /images/modules/localstack-mark.svg
summary: A fully functional local AWS cloud stack.
isOfficial: true
supportsTCC: true 
categories: 
    - cloud-platform
languages:
    - java
    - go
    - dotnet
docs:
    java:
        url: https://www.testcontainers.org/modules/localstack/
    go:
        url: https://golang.testcontainers.org/modules/localstack/
    dotnet:
        url: https://golang.testcontainers.org/modules/localstack/
description: |
    ## Benefits
    LocalStack is a fully functional local AWS cloud stack. This module allows you to develop your cloud and serverless apps without actually using the cloud.
    ## Examples
    ```
    DockerImageName localstackImage = DockerImageName.parse("localstack/localstack:0.11.3");

    @Rule
    public LocalStackContainer localstack = new LocalStackContainer(localstackImage)
        .withServices(S3);
    ```
---