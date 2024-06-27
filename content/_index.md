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
        url: /guides/getting-started-with-testcontainers-for-java/
        external: false
        code: |
          ```java
          GenericContainer redis = new GenericContainer("redis:5.0.3-alpine")
              .withExposedPorts(6379);
          ```
      - id: go
        url: /guides/getting-started-with-testcontainers-for-go/
        external: false
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
        url: /guides/getting-started-with-testcontainers-for-dotnet/
        external: false
        code: |
          ```csharp
          RedisContainer redisContainer = new RedisBuilder().Build();
          await redisContainer.StartAsync();
          ```
      - id: nodejs
        url: /guides/getting-started-with-testcontainers-for-nodejs/
        external: false
        code: |
          ```javascript
          const redis = await new GenericContainer("redis:5.0.3-alpine")
              .withExposedPorts(6379)
              .withWaitStrategy(Wait.forLogMessage("Ready to accept connections"))
              .start();
          ```
      - id: python
        url: https://testcontainers-python.readthedocs.io/en/latest/
        external: true
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
        url: https://docs.rs/testcontainers/latest/testcontainers/
        external: true
        code: |
          ```rust
          let redis = GenericImage::new("redis", "7.2.4")
              .with_exposed_port(6379)
              .with_wait_for(WaitFor::message_on_stdout("Ready to accept connections"))
              .start();
          ```
      - id: haskell
        url: https://github.com/testcontainers/testcontainers-hs
        external: true
        code: |
          ```haskell
          redis <-
            run $
              containerRequest (TestContainers.fromTag "redis:5.0.3-alpine")
                & setExpose ["6379/tcp"]
                & setWaitingFor (waitUntilMappedPortReachable "6379/tcp")
          ```
      - id: ruby
        url: https://github.com/testcontainers/testcontainers-ruby
        external: true
        code: |
          ```ruby
          redis = Testcontainers::DockerContainer.new("redis:5.0.3-alpine").with_exposed_port(6379)
          redis.start
          ```
      - id: clojure
        url: https://cljdoc.org/d/clj-test-containers/
        external: true
        code: |
          ```clojure
          (def container (-> (tc/create {:image-name "redis:5.0.3-alpine")
                                         :exposed-ports [6379]})
                             (tc/start!)))
          ```
      - id: elixir
        url: https://github.com/testcontainers/testcontainers-elixir
        external: true
        code: |
          ```elixir
          {:ok, _} = Testcontainers.start_link()
          config = %Testcontainers.Container{image: "redis:5.0.3-alpine"}
          {:ok, container} = Testcontainers.start_container(config)
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
  - partial: article-links
    small_title: Articles About Testcontainers
    articles:
      - name: Announcing the Recipients of the 2023 Spotify FOSS Fund
        favicon: /images/link-favicons/spotify-engineering.png
        link: https://engineering.atspotify.com/2023/10/announcing-the-recipients-of-the-2023-spotify-foss-fund/
        domain: engineering.atspotify.com
        description: Testcontainers was also part of last year’s fund, receiving 13,000 EUR. And there’s a good reason why it’s back in 2023
      - name: Trying out MongoDB with EF Core using Testcontainers
        favicon: /images/link-favicons/microsoft-devblogs.png
        link: https://devblogs.microsoft.com/dotnet/efcore-mongodb/
        domain: devblogs.microsoft.com
        description: An introduction to the MongoDB database provider for EF Core, including use of Testcontainers
      - name: Handling Flaky Unit Tests in Java
        favicon: /images/link-favicons/uber.png
        link: https://www.uber.com/en-MX/blog/handling-flaky-tests-java/
        domain: uber.com
        description: Building a stable and reliable testing system is often a key requirement for software development organizations
      - name: How to Boost Code Coverage with Functional Testing
        favicon: /images/link-favicons/doordash-engineering.png
        link: https://doordash.engineering/2022/11/01/how-to-boost-code-coverage-with-functional-testing/
        domain: doordash.engineering
        description: Introducing a non manual functional testing approach that can be run like unit tests locally or in a Continuous Integration (CI) pipeline.
      - name: Testcontainers & LocalStack for Spring Boot functional tests
        favicon: /images/link-favicons/capital-one.png
        link: https://www.capitalone.com/tech/software-engineering/testcontainers-and-localstack-functional-testing/
        domain: capitalone.com
        description: A guide from Capital One to using Docker and Testcontainers to make functional tests more portable & economical without sacrificing testing quality.
      - name: Develop and Test Spring Boot Applications Consistently
        favicon: /images/link-favicons/google-cloud.png
        link: https://cloud.google.com/blog/products/application-development/develop-and-test-spring-boot-applications-consistently
        domain: cloud.google.com
        description: Learn how to consistently build and test with environment parity from development to production with Emulators and open-source Testcontainers.
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
        link: https://jooq.org
      - name: Backbase
        logo: /images/sponsor-logos/backbase.svg
        link: https://backbase.com
      - name: Elastic
        logo: /images/sponsor-logos/elastic.svg
        link: https://elastic.co
      - name: Gradle Devlocity
        logo: /images/sponsor-logos/develocity.svg
        link: https://gradle.com/develocity/
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
      - name: XDEV Software
        link: https://xdev.software/en/
  - partial: featured-champions
    small_title: Community Champions
    title: Inspirational members of the community
    description: Testcontainers Community Champions actively contribute to the growth and betterment of the Testcontainers community. They are passionate about Testcontainer, and use their knowledge and skills to help others succeed.
---
