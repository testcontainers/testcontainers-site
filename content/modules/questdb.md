---
title: QuestDB
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/questdb/
    example: |
      ```java
      var questdb = new QuestDBContainer(DockerImageName.parse("questdb/questdb:6.5.3"));
      questdb.start();
      ```
description: |
  QuestDB is an open-source time-series database for high throughput ingestion and fast SQL queries with operational simplicity. It supports schema-agnostic ingestion using the InfluxDB line protocol, PostgreSQL wire protocol, and a REST API for bulk imports and exports.
---