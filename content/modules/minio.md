---
title: MinIO
categories:
  - other
docs:
  - id: dotnet
    url: https://www.nuget.org/packages/Testcontainers.Minio
    example: |
      ```csharp
      var minioContainer = new MinioBuilder()
        .WithImage("minio/minio:RELEASE.2023-01-31T02-24-19Z")
        .Build();
      await minioContainer.StartAsync();
      ```
description: |
  MinIO is a high performance object storage solution. It is API compatible with the Amazon S3 cloud storage service and can handle unstructured data such as photos, videos, log files, backups, and container images with a current maximum supported object size of 5TB.
---