---
title: CouchDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
    var couchDbContainer = new CouchDbBuilder().Build();
    await couchDbContainer.StartAsync();
      ```
description: |
  CouchDB is an open-source document-oriented NoSQL clustered database that allows you to run a single logical database server on any number of servers or VM.
---