---
title: DynamoDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.DynamoDb
    example: |
      ```csharp
      var dynamoDbContainer = new DynamoDbBuilder()
        .WithImage("amazon/dynamodb-local:1.21.0")
        .Build();
      await dynamoDbContainer.StartAsync();
      ```
description: |
  Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.
---