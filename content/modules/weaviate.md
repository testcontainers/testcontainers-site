---
title: Weaviate
categories:
  - vector-database
docs:
  - id: go
    url: https://golang.testcontainers.org/modules/weaviate/
    example: |
      ```go
      weaviateContainer, err := weaviate.RunContainer(ctx, testcontainers.WithImage("semitechnologies/weaviate:1.23.9"))
      ```
description: |
  Weaviate is an open source, AI-native vector database that helps developers create intuitive and reliable AI-powered applications.
---