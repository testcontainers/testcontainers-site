---
title: YugabyteDB
isOfficial: true
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/yugabytedb/
    isThirdParty: false
    example: |
      ```java
      var yugabyte = new YugabyteDBYSQLContainer(DockerImageName.parse("yugabytedb/yugabyte:2.14.4.0-b26"));
      yugabyte.start();
      ```
description: |
  YugabyteDB is a high-performance transactional distributed SQL database for cloud-native applications.
---