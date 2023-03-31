---
title: CockroachDB
isOfficial: false
categories:
  - relational-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/cockroachdb/
    example: |
      ```java
      var cockroach = new new CockroachContainer(DockerImageName.parse("cockroachdb/cockroach:v22.2.3"));
      cockroach.start();
      ```
description: |
  CockroachDB is an open-source, cloud-native, resilient, distributed SQL database.
---