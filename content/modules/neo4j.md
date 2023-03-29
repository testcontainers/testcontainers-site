---
title: Neo4j
isOfficial: true
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/neo4j/
    example: |
      ```
      var neo4j = new Neo4jContainer<>(DockerImageName.parse("neo4j:4.4"));
      neo4j.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/neo4j/
    example: |
      ```
      container, err := neo4j.StartContainer(ctx,
        neo4j.WithAdminPassword("letmein!"),
        neo4j.WithLabsPlugin(neo4j.Apoc),
      )
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/neo4j/
    example: |
      ```
      ```
description: |
  A graph database management system
---