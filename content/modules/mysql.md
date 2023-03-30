---
title: MySQL
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mysql/
    example: |
      ```
      var mysql = new MySQLContainer<>(DockerImageName.parse("mysql:5.7.34"));
      mysql.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/mysql/
    example: |
      ```
      container, err := mysql.StartContainer(ctx, mysql.WithImage("mysql:5.7.34"))
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/mysql/
    example: |
      ```
      ```
description: |
  An SQL database
---