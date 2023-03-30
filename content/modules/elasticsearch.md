---
title: Elasticsearch
categories:
  - nosql-database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/elasticsearch/
    example: |
      ```
      var elastic = new ElasticsearchContainer(DockerImageName.parse("docker.elastic.co/elasticsearch/elasticsearch:7.9.2"));
      elastic.start();
      ```
  - id: dotnet
    url: https://golang.testcontainers.org/modules/localstack/
    example: |
      ```
      ```
  - id: nodejs
    url: https://node.testcontainers.org/modules/elastic-search/
    example: |
      ```
      ```
description: |
  A distributed search and analytics engine
---