---
title: Neo4j
isOfficial: true
categories:
  - nosql-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/neo4j/
    example: |
      ```java
      var neo4j = new Neo4jContainer<>(DockerImageName.parse("neo4j:4.4"));
      neo4j.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/neo4j/
    example: |
      ```go
      container, err := neo4j.StartContainer(ctx,
        neo4j.WithAdminPassword("letmein!"),
        neo4j.WithLabsPlugin(neo4j.Apoc),
      )
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var neo4jContainer = new Neo4jBuilder().Build();
      await neo4jContainer.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/neo4j/
    example: |
      ```javascript
      const container = await new Neo4jContainer().start();
      ```
description: |
  Neo4j is a highly scalable open source graph database management system.
---