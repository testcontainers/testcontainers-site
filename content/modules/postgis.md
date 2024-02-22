---
title: PostGIS
categories:
  - relational-database
docs:
  - id: java
    url: https://java.testcontainers.org/modules/databases/postgres/
    example: |
      ```java
      var postgis = new PostgreSQLContainer<>(DockerImageName.parse("postgis/postgis:12-3.0"));
      postgis.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/postgres/
    example: |
      ```go
      postgisContainer, err := postgres.RunContainer(ctx,
        testcontainers.WithImage("postgis/postgis:12-3.0"),
        postgres.WithDatabase("test"),
        postgres.WithUsername("user"),
        postgres.WithPassword("password"),
      )
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.PostgreSql
    example: |
      ```csharp
      var postgisContainer = new PostgreSqlBuilder()
        .WithImage("postgis/postgis:12-3.0")
        .Build();
      postgisContainer.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/postgresql/
    example: |
      ```javascript
      const container = await new PostgreSqlContainer(image = "postgis/postgis:12-3.0").start();
      ```
description: |
  PostGIS extends the capabilities of the PostgreSQL relational database by adding support for storing, indexing, and querying geospatial data.
---