---
title: Oracle-XE
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/oraclexe/
    example: |
      ```java
      OracleContainer oracle = new OracleContainer("gvenzl/oracle-xe:21-slim-faststart")
        .withDatabaseName("testDB")
        .withUsername("testUser")
        .withPassword("testPassword")
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var oracleContainer = new OracleBuilder().Build();

      await oracleContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  Oracle Database Express Edition is a free, smaller-footprint edition of Oracle Database.
---