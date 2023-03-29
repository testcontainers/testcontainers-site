---
title: MySQL
categories:
  - database
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