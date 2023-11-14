---
title: Oracle Free
categories:
  - relational-database
docs:
  - id: java
    url: https://java.testcontainers.org/modules/databases/oraclefree/
    example: |
      ```java
      var oracle = new OracleContainer(DockerImageName.parse("gvenzl/oracle-free:23.3-slim-faststart"));
      oracle.start();
      ```
description: |
  Oracle Database Free is a free edition of the world's leading database specifically designed for anybody to develop, learn, and run on Oracle Database for free.
---