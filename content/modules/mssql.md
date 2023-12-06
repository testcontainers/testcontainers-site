---
title: MSSQL
categories:
  - relational-database
docs:
  - id: java
    url: https://java.testcontainers.org/modules/databases/mssqlserver/
    example: |
      ```java
      var mssqlserver = new MSSQLServerContainer()
        .acceptLicense();
      mssqlserver.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/mssql/
    example: |
      ```go
      mssqlContainer, err := mssql.RunContainer(ctx,
        testcontainers.WithImage("mcr.microsoft.com/mssql/server:2022-CU10-ubuntu-22.04"),
        mssql.WithAcceptEULA(),
      )
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