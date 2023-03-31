---
title: DynamoDB
categories:
  - nosql-database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var dynamoDbContainer = new DynamoDbBuilder().Build();
      await dynamoDbContainer.StartAsync();
      ```
description: |
  Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.
---