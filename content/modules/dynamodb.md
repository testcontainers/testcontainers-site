---
title: DynamoDB
categories:
  - database
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var dynamoDB = new DynamoDBBuilder().Build();

      await dynamoDBContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  Amazon DynamoDB is a fully managed proprietary NoSQL database service that supports key–value and document data structures and is offered by Amazon.com as part of the Amazon Web Services portfolio.
---