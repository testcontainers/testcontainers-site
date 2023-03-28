---
title: InfluxDB
categories:
  - database
docs:
  - id: java
    url: https://www.testcontainers.org/modules/databases/influxdb/
    example: |
      ```java
      InfluxDBContainerinfluxDBContainer = new InfluxDBContainer<>(DockerImageName.parse("influxdb:2.0.7")
      ```
description: |
  InfluxDB is an open-source time series database for storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.
---