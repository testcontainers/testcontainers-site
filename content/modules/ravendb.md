---
title: RavenDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var ravenDbContainer = new RavenDbBuilder().Build();
      await ravenDbContainer.StartAsync();
      ```
description: |
  RavenDB is an open-source NoSQL database software designed to help businesses streamline multi-document ACID transactions and facilitate extract, transform, and load (ETL) operations.
---