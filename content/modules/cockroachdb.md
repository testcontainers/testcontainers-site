---
title: CockroachDB
isOfficial: true
categories:
  - relational-database
docs:
  - id: java
    url: https://java.testcontainers.org/modules/databases/cockroachdb/
    example: |
      ```java
      var cockroach = new new CockroachContainer(DockerImageName.parse("cockroachdb/cockroach:v22.2.3"));
      cockroach.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/databases/cockroachdb/
    example: |
      ```go
      cockroachdbContainer, err := cockroachdb.RunContainer(ctx, testcontainers.WithImage("cockroachdb/cockroach:v22.2.3")
      ```
description: |
  CockroachDB is an open-source, cloud-native, resilient, distributed SQL database.
---