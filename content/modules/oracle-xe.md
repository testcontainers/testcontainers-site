---
title: Oracle-XE
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/oraclexe/
    example: |
      ```java
      var oracle = new OracleContainer(DockerImageName.parse("gvenzl/oracle-xe:21-slim-faststart"));
      oracle.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var oracleContainer = new OracleBuilder().Build();
      await oracleContainer.StartAsync();
      ```
description: |
  Oracle Database Express Edition is a free, smaller-footprint edition of Oracle Database.
---