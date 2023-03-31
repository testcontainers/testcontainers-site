---
title: Couchbase
isOfficial: false
categories:
  - nosql-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/couchbase/
    example: |
      ```
      var couchbase = new CouchbaseContainer(DockerImageName.parse(
        "couchbase/server:community-7.0.2"
      ));
      couchbase.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/couchbase/
    example: |
      ```
      container, err := couchbase.StartContainer(ctx,
        couchbase.WithImageName("couchbase/server:community-7.0.2"),
        couchbase.WithBucket(couchbase.NewBucket("bucketName")),
      )
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```
      ```
description: |
  A document oriented NoSQL database
---