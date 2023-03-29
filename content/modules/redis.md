---
title: Redis
categories:
  - database
docs:
  - id: java
    url: https://github.com/redis-developer/testcontainers-redis
    isThirdParty: true
    example: |
      ```java
      var redis = new RedisContainer();
      redis.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var redisContainer = new RedisBuilder().Build();

      await redisContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  Redis is an in-memory data structure store, used as a distributed, in-memory key–value database, cache and message broker, with optional durability. Redis supports different kinds of abstract data structures, such as strings, lists, maps, sets, sorted sets, HyperLogLogs, bitmaps, streams, and spatial indices.
---