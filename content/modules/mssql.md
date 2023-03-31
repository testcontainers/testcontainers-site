---
title: MSSQL
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mssqlserver/
    example: |
      ```java
      var mssqlserver = new MSSQLServerContainer()
        .acceptLicense();
      mssqlserver.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var sqlServerContainer = new SqlServerBuilder().Build();
      await sqlServerContainer.StartAsync();
      ```
description: |
  Microsoft SQL Server is a relational database management system.
---