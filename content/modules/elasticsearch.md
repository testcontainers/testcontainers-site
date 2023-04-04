---
title: Elasticsearch
categories:
  - nosql-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/elasticsearch/
    example: |
      ```java
      var elastic = new ElasticsearchContainer(DockerImageName.parse("docker.elastic.co/elasticsearch/elasticsearch:7.9.2"));
      elastic.start();
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Elasticsearch
    example: |
      ```csharp
      var elasticsearchContainer = new ElasticsearchBuilder()
        .WithImage("elasticsearch:8.6.1")
        .Build();
      await elasticsearchContainer.StartAsync();
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/elastic-search/
    example: |
      ```javascript
      const container = await new ElasticsearchContainer().start();
      ```
description: |
  Elasticsearch is a search and analytics engine based on Apache Lucene. It provides a distributed, multitenant-capable full-text search engine with an HTTP web interface and schema-free JSON documents.
---