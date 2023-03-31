---
title: Vault
categories:
  - other
docs:
  - id: java
    url: https://www.testcontainers.org/modules/vault/
    example: |
      ```java
      var vault = new VaultContainer<>(DockerImageName.parse(("hashicorp/vault:1.13.0"));
      vault.start();
      ```
  - id: go
    url: https://golang.testcontainers.org/modules/vault/
    example: |
      ```go
      container, err := vault.StartContainer(ctx,
        vault.WithImageName("hashicorp/vault:1.13.0"),
        vault.WithToken("root-token"),
        vault.WithInitCommand("secrets enable transit", "write -f transit/keys/my-key"),
        vault.WithInitCommand("kv put secret/test1 foo1=bar1"),
      )
      ```
description: |
  HashiCorp Vault is an identity-based secrets and encryption management system for storing API encryption keys, passwords, and certificates.
---