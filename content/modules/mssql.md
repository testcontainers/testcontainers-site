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
    url: https://www.nuget.org/packages/Testcontainers.MsSql
    example: |
      ```csharp
      var msSqlContainer = new MsSqlBuilder()
        .WithImage("mcr.microsoft.com/mssql/server:2019-CU18-ubuntu-20.04")
        .Build();
      await msSqlContainer.StartAsync();
      ```
description: |
  Microsoft SQL Server is a relational database management system.
---