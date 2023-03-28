---
title: PostgreSQL
categories: 
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/postgres/
    example: |
      ```java
      var postgres = new PostgreSQLContainer<>("postgres:9.6.12");
      postgres.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/postgres/
    example: |
      ```go
      import "github.com/testcontainers/testcontainers-go/modules/postgres"

      ...

      container, err := postgres.StartContainer(ctx,
          postgres.WithImage("postgres:9.6"),
          postgres.WithDatabase("test"),
          postgres.WithUsername("user"),
          postgres.WithPassword("password"),
      )
      if err != nil {
          t.Fatal(err)
      }
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/postgres/
    example: |
      ```csharp
      PostgreSqlContainer postgres = new PostgreSqlBuilder().Build();
      postgres.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/postgresql/
    example: |
      ```javascript
      const container = await new PostgreSqlContainer().start();
      ```
description: |
  PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.
---