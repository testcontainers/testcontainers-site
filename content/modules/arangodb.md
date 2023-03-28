---
title: ArangoDB
categories: 
  - database
docs:
  - id: java
    url: https://github.com/GoodforGod/arangodb-testcontainers
    isThirdParty: true
    example: |
      ```java
      @Container
      private static final ArangoContainer container = new ArangoContainer()
        .withoutAuth();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/arangodb/
    example: |
      ```javascript
      const container = await new ArangoDBContainer().start();
      ```
description: |
  ArangoDB is a free and open-source native graph database system. It supports three data models; graphs, JSON documents, and key/value.
---