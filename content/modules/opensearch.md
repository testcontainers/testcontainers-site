---
title: OpenSearch
categories:
  - vector-database
docs:
  - id: go
    url: https://golang.testcontainers.org/modules/opensearch/
    example: |
      ```go
      opensearchContainer, err := opensearch.RunContainer(ctx, testcontainers.WithImage("opensearchproject/opensearch:2.11.1"))
      ```
description: |
  OpenSearch is the flexible, scalable, open-source way to build solutions for data-intensive applications.
---