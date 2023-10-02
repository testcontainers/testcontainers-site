---
title: Keycloak
categories:
  - other
docs:
  - id: java
    url: https://github.com/dasniko/testcontainers-keycloak
    isThirdParty: true
    example: |
      ```java
      var keycloak = new KeycloakContainer();
      keycloak.start();
      ```
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Keycloak
    example: |
      ```csharp
      var keycloakContainer = new KeycloakBuilder()
        .WithImage("quay.io/keycloak/keycloak:21.1")
        .Build();
      await keycloakContainer.StartAsync();
      ```
  - id: go
    url: https://github.com/stillya/testcontainers-keycloak
    isThirdParty: true
    example: |
      ```go
      container, err := keycloak.RunContainer(ctx,
        testcontainers.WithImage("quay.io/keycloak/keycloak:21.1"),
        testcontainers.WithWaitStrategy(wait.ForListeningPort("8080/tcp")),
        keycloak.WithContextPath("/auth"),
        keycloak.WithRealmImportFile("../testdata/realm-export.json"),
        keycloak.WithAdminUsername("admin"),
        keycloak.WithAdminPassword("admin"),
      )
      ```
description: |
  Keycloak is an open source identity and access management application that provides user federation, strong authentication, user management, fine-grained authorization, and more.
---
