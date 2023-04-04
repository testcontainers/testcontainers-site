---
title: MySQL
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mysql/
    example: |
      ```java
      var mysql = new MySQLContainer<>(DockerImageName.parse("mysql:5.7.34"));
      mysql.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/mysql/
    example: |
      ```go
      container, err := mysql.StartContainer(ctx, testcontainers.WithImage("mysql:5.7.34"))
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var mySqlServerContainer = new MySqlServerBuilder().Build();
      await mySqlServerContainer.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/mysql/
    example: |
      ```javascript
      const container = await new MySqlContainer().start();
      ```
description: |
  MySQL is an open-source relational database management system.
---