---
title: MinIO
categories:
  - other
docs:
  - id: dotnet
    url: https://dotnet.testcontainers.org/modules/
    example: |
      ```csharp
      var minIOContainer = new MinIOBuilder().Build();

      await minIOContainer.StartAsync()
        .ConfigureAwait(false);
      ```
description: |
  MinIO is a high performance object storage solution. It is API compatible with the Amazon S3 cloud storage service and can handle unstructured data such as photos, videos, log files, backups, and container images with a current maximum supported object size of 5TB.
---