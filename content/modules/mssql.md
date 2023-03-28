---
title: MSSQL
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mssqlserver/
    example: |
      ```java
      MSSQLServerContainer mssqlserver = new MSSQLServerContainer()
        .acceptLicense();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var sqlServerContainer = new SQLServerBuilder().Build();

      await sqlServerContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  Microsoft SQL Server is a relational database management system.
---