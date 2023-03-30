---
title: EventStoreDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var eventStoreDBContainer = new EventStoreDBBuilder().Build();

      await eventStoreDBContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  EventStoreDB is an event sourcing database that stores data in streams of immutable events.
---