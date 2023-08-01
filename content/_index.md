---
title: Testcontainers
sections:
  - partial: hero-banner
    title: Unit tests with real dependencies
    description: Testcontainers is an open source framework for providing throwaway, lightweight instances of databases, message brokers, web browsers, or just about anything that can run in a Docker container.
  - partial: code-examples
    small_title: How it works
    title: Test dependencies as code
    description: |
      No more need for mocks or complicated environment configurations. Define your test dependencies as code, then simply run your tests and containers will be created and then deleted.

      With support for many languages and testing frameworks, all you need is Docker.
    examples:
      - id: java
        label: Java
        url: /guides/getting-started-with-testcontainers-for-java/
        external: false
        icon: /images/language-logos/java.svg
        code: |
          ```java
          GenericContainer redis = new GenericContainer("redis:5.0.3-alpine")
              .withExposedPorts(6379);
          ```
      - id: go
        label: Go
        url: /guides/getting-started-with-testcontainers-for-go/
        external: false
        icon: /images/language-logos/go.svg
        code: |
          ```go
          container, err := testcontainers.GenericContainer(ctx, testcontainers.GenericContainerRequest{
              ContainerRequest: testcontainers.ContainerRequest{
                  Image:        "redis:5.0.3-alpine",
                  ExposedPorts: []string{"6379/tcp"},
                  WaitingFor:   wait.ForLog("Ready to accept connections"),
              },
              Started:          true,
          })
          ```
      - id: dotnet
        label: .NET
        url: /guides/getting-started-with-testcontainers-for-dotnet/
        external: false
        icon: /images/language-logos/dotnet.svg
        code: |
          ```csharp
          RedisContainer redisContainer = new RedisBuilder().Build();
          await redisContainer.StartAsync();
          ```
      - id: nodejs
        label: Node.js
        url: /guides/getting-started-with-testcontainers-for-nodejs/
        external: false
        icon: /images/language-logos/nodejs.svg
        code: |
          ```javascript
          const redis = await new GenericContainer("redis:5.0.3-alpine")
              .withExposedPorts(6379)
              .withWaitStrategy(Wait.forLogMessage("Ready to accept connections"))
              .start();
          ```
      - id: python
        label: Python
        url: https://testcontainers-python.readthedocs.io/en/latest/
        external: true
        icon: /images/language-logos/python.svg
        code: |
          ```python
          redis = (
              DockerContainer("redis:5.0.3-alpine")
                  .with_exposed_ports(6379)
          )
          redis.start()
          wait_for_logs(redis, "Ready to accept connections")
          ```
      - id: rust
        label: Rust
        url: https://docs.rs/testcontainers/latest/testcontainers/
        external: true
        icon: /images/language-logos/rust.svg
        code: |
          ```rust
          let docker = clients::Cli::default();
          let redis = docker.run(redis::Redis::default());
          ```
      - id: haskell
        label: Haskell
        url: https://github.com/testcontainers/testcontainers-hs
        external: true
        icon: /images/language-logos/haskell.svg
        code: |
          ```haskell
          redis <-
            run $
              containerRequest (TestContainers.fromTag "redis:5.0.3-alpine")
                & setExpose ["6379/tcp"]
                & setWaitingFor (waitUntilMappedPortReachable "6379/tcp")
          ```
      - id: ruby
        label: Ruby
        url: https://github.com/testcontainers/testcontainers-ruby
        external: true
        icon: /images/language-logos/ruby.svg
        code: |
          ```ruby
          redis = Testcontainers::DockerContainer.new("redis:5.0.3-alpine").with_exposed_port(6379)
          redis.start
          ```
  - partial: logo-wall
    small_title: Modules
    title: "Test Anything You Can Containerize: Database, Message Broker, And More"
    buttons:
      - label: See all 50+ Modules
        url: /modules
        style: outline
    logos:
      - /images/company-logos/postgresql.svg
      - /images/company-logos/kafka.svg
      - /images/company-logos/mongodb.svg
      - /images/company-logos/kubernetes.svg
      - /images/company-logos/cassandra.svg
      - /images/company-logos/elasticsearch.svg
      - /images/company-logos/mysql.svg
      - /images/company-logos/redpanda.svg
      - /images/company-logos/rabbitmq.svg
      - /images/company-logos/neo4j.svg
      - /images/company-logos/couchbase.svg
      - /images/company-logos/google-cloud.svg
      - /images/company-logos/azure.svg
      - /images/company-logos/localstack.svg
      - /images/company-logos/cockroachdb.svg
      - /images/company-logos/clickhouse.svg
      - /images/company-logos/consul.svg
      - /images/company-logos/hivemq.svg
      - /images/company-logos/k3s.svg
      - /images/company-logos/nginx.svg
      - /images/company-logos/presto.svg
      - /images/company-logos/pulsar.svg
      - /images/company-logos/questdb.svg
      - /images/company-logos/selenium.svg
  - partial: icon-columns
    small_title: Use cases
    title: How Testcontainers can help you
    columns:
      - icon: /images/icons/database.svg
        title: Data access layer integration tests
        description: |
          Use a containerized instance of your database to test your data access layer code for complete compatibility, without requiring a complex setup on developer machines. Trust that your tests will always start with a known state.
      - icon: /images/icons/browser.svg
        title: UI/Acceptance tests
        description: |
          Use containerized web browsers, compatible with Selenium, to run automated UI tests. Each test gets a fresh, clean instance of the browser, without having to worry about variations in plugins or required updates.
      - icon: /images/icons/puzzle.svg
        title: Application integration tests
        description: |
          Run your application in a short-lived test mode with dependencies, such as databases, message queues or web servers, to give you a rich interactive and explorative testing environment.
  - partial: supported-languages
    small_title: Get started
    title: Supported Languages
    description: |
      There are implementations of Testcontainers in all of your favorite languages. Click through to read their specific documentation.
    languages:
      - logo: /images/language-logos/java.svg
        label: Java
        link: https://java.testcontainers.org/
      - logo: /images/language-logos/go.svg
        label: Go
        link: https://golang.testcontainers.org/
      - logo: /images/language-logos/dotnet.svg
        label: .NET
        link: https://dotnet.testcontainers.org/
      - logo: /images/language-logos/nodejs.svg
        label: Node.js
        link: https://node.testcontainers.org/
      - logo: /images/language-logos/python.svg
        label: Python
        link: https://testcontainers-python.readthedocs.io/en/latest/
      - logo: /images/language-logos/rust.svg
        label: Rust
        link: https://docs.rs/testcontainers/latest/testcontainers/
      - logo: /images/language-logos/haskell.svg
        label: Haskell
        link: https://github.com/testcontainers/testcontainers-hs
      - logo: /images/language-logos/ruby.svg
        label: Ruby
        link: https://github.com/testcontainers/testcontainers-ruby
  - partial: company-logos
    small_title: Industry standard
    title: Companies using Testcontainers
    companies:
      - name: Spotify
        logo: /images/company-logos/spotify.svg
        link: https://spotify.com
      - name: JetBrains
        logo: /images/company-logos/jetbrains.svg
        link: https://jetbrains.com
      - name: Netflix
        logo: /images/company-logos/netflix.svg
        link: https://netflix.com
      - name: Uber
        logo: /images/company-logos/uber.svg
        link: https://uber.com
      - name: CapitalOne
        logo: /images/company-logos/capitalone.svg
        link: https://capitalone.com
      - name: Elastic
        logo: /images/company-logos/elastic.svg
        link: https://elastic.com
      - name: Wise
        logo: /images/company-logos/wise.svg
        link: https://wise.com
      - name: Zalando
        logo: /images/company-logos/zalando.svg
        link: https://zalando.com
      - name: Skyscanner
        logo: /images/company-logos/skyscanner.svg
        link: https://skyscanner.com
      - name: Playtika
        logo: /images/company-logos/playtika.svg
        link: https://playtika.com
  - partial: sponsor-credits
    small_title: A huge thankyou to our sponsors
    bronze_sponsors_title: Bronze Sponsors
    donors_title: Donors
    backers_title: Backers
    bronze_sponsors:
      - name: CirrusCI
        logo: /images/sponsor-logos/cirrusci.svg
        link: https://cirrusci.com
      - name: Vivy
        logo: /images/sponsor-logos/vivy.svg
        link: https://vivy.com
      - name: JOOQ
        logo: /images/sponsor-logos/jooq.svg
        link: https://jooq.com
      - name: Backbase
        logo: /images/sponsor-logos/backbase.svg
        link: https://backbase.com
      - name: Elastic
        logo: /images/sponsor-logos/elastic.svg
        link: https://elastic.co
    donors:
      - name: RedHat
        logo: /images/sponsor-logos/redhat.svg
        link: https://redhat.com
      - name: Spotify
        logo: /images/sponsor-logos/spotify.svg
        link: https://spotify.com
      - name: GitHub
        logo: /images/sponsor-logos/github.svg
        link: https://github.com
    backers:
      - name: Philip Riecks
        link: https://github.com/rieckpil
      - name: Karl Heinz Marbaise
        link: https://github.com/khmarbaise
      - name: Sascha Frinken
        link: https://github.com/sascha-frinken
      - name: Christoph Dreis
        link: https://github.com/dreis2211
      - name: Nikita Zhevnitskiy
        link: https://github.com/zhenik
      - name: Bas Stoker
        link: https://github.com/bastoker
      - name: Oleg Nenashev
        link: https://github.com/oleg-nenashev
      - name: Rik Glover
        link: https://github.com/rikglover
      - name: Amitosh Swain Mahapatra
        link: https://github.com/recrsn
      - name: Paris Apostolopoulos
        link: https://opencollective.com/paris-apostolopoulos
  - partial: featured-champions
    small_title: Community Champions
    title: Inspirational members of the community
    description: Testcontainers Community Champions actively contribute to the growth and betterment of the Testcontainers community. They are passionate about Testcontainer, and use their knowledge and skills to help others succeed.
---
