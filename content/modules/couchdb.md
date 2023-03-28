---
title: CouchDB
categories:
  - database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var couchDBContainer = new CouchDBBuilder().Build();

      await couchDBContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  CouchDB is an open-source document-oriented NoSQL clustered database that allows you to run a single logical database server on any number of servers or VM.
---