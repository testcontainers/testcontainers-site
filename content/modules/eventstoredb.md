---
title: EventStoreDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var eventStoreDbContainer = new EventStoreDbBuilder().Build();
      await eventStoreDbContainer.StartAsync();
      ```
description: |
  EventStoreDB is an event sourcing database that stores data in streams of immutable events.
---