---
title: MariaDB
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mariadb/
    example: |
      ```java
      MariaDBContainer mariaDB = new MariaDBContainer<>(DockerImageName.parse("mariadb:10.5.5"));
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var mariaDBContainer = new MariaDBBuilder().Build();

      await mariaDBContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.
---