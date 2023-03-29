---
title: MongoDB
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/mongodb/
    example: |
      ```java
      var mongoDBContainer = new MongoDBContainer(DockerImageName.parse("mongo:4.0.10"));
      mongoDBContainer.start();
      ```
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var mongoDBContainer = new MongoDBBuilder().Build();

      await mongoDBContainer.StartAsync()
        .ConfigureAwait(false);
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/mongodb/
    example: |
      ```javascript
      const mongodbContainer = await new MongoDBContainer().start();
      ```
description: |
  MongoDB is a source-available cross-platform document-oriented database program.
---