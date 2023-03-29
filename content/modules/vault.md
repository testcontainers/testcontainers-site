---
title: Vault
categories:
  - secret-store
docs:
  - id: java
    url: https://www.testcontainers.org/modules/vault/
    example: |
      ```
      var vault = new VaultContainer<>(DockerImageName.parse(("vault:1.6.1"));
      vault.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/vault/
    example: |
      ```
      ```
description: |
  A secure token vault
---