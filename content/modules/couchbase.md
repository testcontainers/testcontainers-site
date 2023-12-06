---
title: Couchbase
isOfficial: false
categories:
  - nosql-database
docs:
  - id: java
    url: https://java.testcontainers.org/modules/databases/couchbase/
    example: |
      ```java
      var couchbase = new CouchbaseContainer(DockerImageName.parse(
        "couchbase/server:community-7.0.2"
      ));
      couchbase.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/couchbase/
    example: |
      ```go
      couchbaseContainer, err := couchbase.RunContainer(ctx,
        testcontainers.WithImage("couchbase/server:community-7.0.2"),
        couchbase.WithBucket(couchbase.NewBucket("bucketName")),
      )
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Couchbase
    example: |
      ```csharp
      var couchbaseContainer = new CouchbaseBuilder()
        .WithImage("couchbase:community-7.0.2")
        .Build();
      await couchbaseContainer.StartAsync();
      ```
description: |
  Couchbase is an open-source, distributed, multi-model, document oriented, NoSQL database.
---