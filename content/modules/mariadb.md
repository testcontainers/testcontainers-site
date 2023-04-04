---
title: MariaDB
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mariadb/
    example: |
      ```java
      var mariaDB = new MariaDBContainer<>(DockerImageName.parse("mariadb:10.5.5"));
      mariaDB.start();
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.MariaDb
    example: |
      ```csharp
      var mariaDbContainer = new MariaDbBuilder()
        .WithImage("mariadb:10.10")
        .Build();
      await mariaDbContainer.StartAsync();
      ```
description: |
  MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.
---