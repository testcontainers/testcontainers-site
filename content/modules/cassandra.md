---
title: Cassandra
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/cassandra/
    example: |
      ```java
      var cassandra = new CassandraContainer<>("cassandra:3.11.2");
      cassandra.start();
      ```
description: |
  Cassandra is a free and open source, distributed NoSQL database management system. It is designed to handle large amounts of data across many commodity servers, providing high availability with no single point of failure.
---