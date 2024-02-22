---
title: Chroma
categories:
  - vector-database
docs:
  - id: go
    url: https://golang.testcontainers.org/modules/chroma/
    example: |
      ```go
      chromaContainer, err := chroma.RunContainer(ctx, testcontainers.WithImage("chromadb/chroma:0.4.22"))
      ```
description: |
  Chroma is the AI-native open-source embedding database.
---